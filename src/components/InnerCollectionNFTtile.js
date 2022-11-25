import axie from "../tile.jpeg";
import { BrowserRouter as Router, Link } from "react-router-dom";

function InnerCollectionNFTtile(data) {
  //this was the previous code.
  // const newTo = {
  //   pathname: "/nftPage/" + data.data.tokenId,
  // };
  // below is the new code.
  const newPthforinnercollection = {
    pathname: "/innerNfts/" + data.data.tokenId,
  };

  return (
    <Link to={newPthforinnercollection}>
      <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
        <img
          src={data.data.image}
          alt=""
          className="w-72 h-80 rounded-lg object-cover"
        />
        {/**This is the first level of Collection that is being displayed using the Tile */}
        <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
          <strong className="text-xl">{data.data.name}</strong>
          <p className="display-inline">{data.data.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default InnerCollectionNFTtile;
