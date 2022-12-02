import Navbar from "./Navbar";
import axie from "../tile.jpeg";
import { useLocation, useParams } from "react-router-dom";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";

export default function NFTPage(props) {
  const [data, updateData] = useState({});
  const [message, updateMessage] = useState("");
  const [currAddress, updateCurrAddress] = useState("0x");
  const handleClick = () => {};

  return (
    <div style={{ "min-height": "100vh" }}>
      <Navbar></Navbar>

      <div className="flex flex-row text-center justify-center mt-10 md:text-2xl text-black">
        <div>
          <label
            for="helper-text"
            class="block mb-2 text-sm font-medium text-gray-900 ">
            Address of the Wallet
          </label>
          <input
            type="address"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
          <p
            id="helper-text-explanation"
            class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="#"
              class="font-medium text-blue-600 hover:underline dark:text-blue-500">
              Metamask Wallet Address
            </a>
            .
          </p>
          <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
            Transfer
          </button>
          {/** Above we added the field */}
        </div>
      </div>
      <div className="ui placeholder segment index-home first-segment">
        <div className=" flex-non flex ml-20 mt-20">
          <img src={data.image} alt="" className="w-2/5" />
          <div className="text-xl ml-20 space-y-5 text-black shadow-2xl rounded-lg border-2 p-20">
            <div>Name: {data.name}</div>
            <div>Description: {data.description}</div>
            <div>Student No:{data.studentnumber}</div>

            <div>
              Owner: <span className="text-sm">{data.owner}</span>
            </div>
            <div>
              University: <span className="text-sm">{data.seller}</span>
            </div>
            <div>
              Degree: <span className="text-sm">{data.seller}</span>
            </div>
            <div>
              {currAddress == data.owner || currAddress == data.seller ? (
                <div className="text-emerald-700">
                  You are the owner of this NFT
                </div>
              ) : (
                <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                  Buy this NFT
                </button>
              )}

              <div className="text-green text-center mt-3">{message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
