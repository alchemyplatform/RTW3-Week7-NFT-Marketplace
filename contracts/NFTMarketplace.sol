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

    mapping(uint256 => ListedToken) private idToListedToken;

    constructor() ERC721("NFTMarketplace", "NFTM") {
        owner = payable(msg.sender);
    }

    // functions

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
}
