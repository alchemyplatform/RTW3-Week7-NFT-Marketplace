import Navbar from "./Navbar";
import { useLocation, useParams } from "react-router-dom";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import NFTTile from "./NFTTile";

export default function Profile() {
  const [data, updateData] = useState([]);
  const [address, updateAddress] = useState("0x");
  const [totalPrice, updateTotalPrice] = useState("0");

  return (
    <div className="profileClass" style={{ "min-height": "100vh" }}>
      <Navbar></Navbar>
      <div className="profileClass">
        <div className="flex text-center flex-col mt-11 md:text-2xl text-black">
          <div className="mb-5">
            <h2 className="font-bold">Wallet Address</h2>
            {address}
          </div>
        </div>
        <div className="flex flex-row text-center justify-center mt-10 md:text-2xl text-black">
          <div>
            <h2 className="font-bold">No. of NFTs</h2>
            {data.length}
          </div>
          <div className="ml-20">
            <h2 className="font-bold">Total Value</h2>
            {totalPrice} ETH
          </div>
        </div>
        <div className="flex flex-col text-center items-center mt-11 text-black">
          <h2 className="font-bold">Your NFTs</h2>
          <div className="flex justify-center flex-wrap max-w-screen-xl">
            {data.map((value, index) => {
              return <NFTTile data={value} key={index}></NFTTile>;
            })}
          </div>
          <div className="mt-10 text-xl">
            {data.length == 0
              ? "Oops, No NFT data to display (Are you logged in?)"
              : ""}
          </div>
        </div>
        <div className="flex text-center flex-col mt-11 md:text-2xl text-black">
          <div className="collection">
            <div className="container">
              <h3 className="mb-4">Collections</h3>
              <div className="card-grp">
                <div className="card">
                  <div className="card-images">
                    <figure className="card-images__banner">
                      <img className="/Assets/images/banner.jpg" alt="Banner" />
                    </figure>
                    <div className="card-image__logo-box">
                      <img src="/Assets/images/logo.jpg" alt="Logo" />
                    </div>
                  </div>

                  <div className="card-content">
                    <h5 className="card-content__name">Hello World</h5>
                    <a href="#" className="card-content__url">
                      hello-world.com
                    </a>
                    <p className="card-content__desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas congue tellus nec metus semper, sodales suscipit
                      lorem cursus. Nunc aliquet accumsan risus, vitae iaculis
                      erat lacinia et.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-images">
                    <figure className="card-images__banner">
                      <img src="/Assets/images/banner.jpg" alt="Banner" />
                    </figure>
                    <div className="card-image__logo-box">
                      <img src="/Assets/images/logo.jpg" alt="Logo" />
                    </div>
                  </div>

                  <div className="card-content">
                    <h5 className="card-content__name">Hello World</h5>
                    <a href="/dashBoard" className="card-content__url">
                      hello-world.com
                    </a>
                    <p className="card-content__desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas congue tellus nec metus semper, sodales suscipit
                      lorem cursus. Nunc aliquet accumsan risus, vitae iaculis
                      erat lacinia et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
