//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

//Console functions to help debug the smartcontract just like in JS
import "hardhat/console.sol";
//OpenZeppelin's NFT Standart Contracts. We will extend functions from this in our implementation
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    address payable public owner;
    //listing fee
    uint256 listingPrice = 0.01 ether;

    //The structure to store info about a listed token
    struct ListedToken {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool currentlyListed;
    }

    mapping(uint256 => ListedToken) private idToListedToken; //mapping of token ids for listed tokens(NFTs)

    constructor() ERC721("NFTMarketplace", "NFTM") {
        owner = payable(msg.sender);
    }

    //main functions
    function createToken(
        string memory tokenURI,
        uint256 price
    ) public payable returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _safeMint(msg.sender, newTokenId);

        _setTokenURI(newTokenId, tokenURI);

        //Helper function to update Global variables and emit an event
        listCreatedToken(newTokenId, price);

        return newTokenId;
    }

    function listCreatedToken(uint256 tokenId, uint256 price) private {
        require(
            msg.value == listingPrice,
            "Paid value is not the listing value"
        );
        require(price > 0, "Price can't be negative");

        //Update the mapping of tokenId's to Token details, useful for retrieval functions
        idToListedToken[tokenId] = ListedToken(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true
        );

        _transfer(msg.sender, address(this), tokenId);
    }

    function getAllNFTs() public view returns (ListedToken[] memory) {
        uint NFTCount = _tokenIds.current();
        ListedToken[] memory tokens = new ListedToken[](NFTCount);
        uint currentIndex = 0;

        for (uint i = 0; i < NFTCount; i++) {
            uint256 currentId = i + 1;
            ListedToken storage currentItem = idToListedToken[currentId];
            tokens[currentIndex] = currentItem;
            currentIndex += 1;
        }

        return tokens;
    }

    function getMyNFTs() public view returns (ListedToken[] memory) {
        uint totalItemCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        //Important to get a count of all the NFTs that belong to the user before we can make an array for them
        for (uint i = 0; i < totalItemCount; i++) {
            if (
                idToListedToken[i + 1].owner == msg.sender ||
                idToListedToken[i + 1].seller == msg.sender
            ) {
                itemCount += 1;
            }
        }

        //Once you have the count of relevant NFTs, create an array then store all the NFTs in it
        ListedToken[] memory items = new ListedToken[](itemCount);
        //now to make a display of all the NFTs that the user owns and fetch it in the array, we need to go through it
        for (uint i = 0; i < totalItemCount; i++) {
            uint currentId = i + 1;
            ListedToken storage currentItem = idToListedToken[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }

        return items;
    }

    function executeSale(uint256 tokenId) public payable {
        uint price = idToListedToken[tokenId].price;
        address seller = idToListedToken[tokenId].seller;

        require(msg.value == price, "Submit the ask bid in order to purchase");

        idToListedToken[tokenId].currentlyListed = true;
        idToListedToken[tokenId].seller = payable(msg.sender);
        _itemsSold.increment();

        _transfer(address(this), msg.sender, tokenId);

        //approve the marketplace to sell NFTs on your behalf
        approve(address(this), tokenId);

        // transfer  the listing fee to the marketplace creator
        payable(owner).transfer(listingPrice);
        //Transfer the proceeds from the sale to the seller of the NFT
        payable(seller).transfer(msg.value);
    }

    // Helper functions

    function updateListedPrice(uint256 _listingPrice) public payable {
        require(
            owner == msg.sender,
            "Only owner can update the listing price!"
        );

        listingPrice = _listingPrice;
    }

    function getListedPrice() public view returns (uint256) {
        return listingPrice;
    }

    // this function fetchs the latest information from the latest NFT minted
    function getLatestIdToListedToken()
        public
        view
        returns (ListedToken memory)
    {
        uint256 currentTokenId = _tokenIds.current();
        return idToListedToken[currentTokenId];
    }

    // this functions fetchs the NFT accordingly with the provided id
    function getListedTokenToId(
        uint256 tokenId
    ) public view returns (ListedToken memory) {}

    function getCurrentToken() public view returns (uint256) {
        return _tokenIds.current();
    }
}
