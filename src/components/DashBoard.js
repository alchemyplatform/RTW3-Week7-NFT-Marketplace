import Navbar from "./Navbar";
import { useLocation, useParams } from "react-router-dom";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import NFTTile from "./NFTTile";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function DashBoard() {
  const [data, updateData] = useState([]);
  const [address, updateAddress] = useState("0x");
  const [totalPrice, updateTotalPrice] = useState("0");

  return (
    <>
      <Navbar></Navbar>
      <div className="ui placeholder segment index-about second-segment">
        <div className="ui stackable center aligned four column grid">
          <div className="middle aligned row titleRow">
            <div className="column">
              <h3 className="ui header">Setup you wallet</h3>
              <p>
                Metamask wallet is required for running this NFT Certificate
                <a href="/dashBoard" target="_blank">
                  Learn on How to Install Metamask Extensiuon for you browser?
                </a>
              </p>
            </div>
            <div className="column">
              <h3 className="ui header">Setup you wallet</h3>
              <p>
                Metamask wallet is required for running this NFT Certificate
                <a href="/dashBoard" target="_blank">
                  Learn on How to Install Metamask Extensiuon for you browser?
                </a>
              </p>
            </div>
            <div className="column">
              <h3 className="ui header">Setup you wallet</h3>
              <p>
                Metamask wallet is required for running this NFT Certificate
                <a href="/dashBoard" target="_blank">
                  Learn on How to Install Metamask Extensiuon for you browser?
                </a>
              </p>
            </div>
            <div className="column">
              <h3 className="ui header">Setup you wallet</h3>
              <p>
                Metamask wallet is required for running this NFT Certificate
                <a href="/dashBoard" target="_blank">
                  Learn on How to Install Metamask Extensiuon for you browser?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
