import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellNFT from "./components/SellNFT";
import Marketplace from "./components/Marketplace";
import Profile from "./components/Profile";
import NFTPage from "./components/NFTpage";
import DashBoard from "./components/DashBoard";
import "semantic-ui-css/semantic.min.css";
import InnerCollection from "./components/InnerCollection";
import InnerNfts from "./components/InnerNFts";
// Need to ask asim why we are having the routes in the index.js instead of just app.js
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import Account from "./components/Account";

// element with id of root is getting the content of the file .
//index.js kind a kickstart our application as it is rendering what even it is in the app.js
// the root is the id of the root div in the index.html file

//this is the way to write the reactdom version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/" element={<Marketplace />} />
        <Route path="/sellNFT" element={<SellNFT />} />
        <Route path="/nftPage/:tokenId" element={<NFTPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/innerCollection" element={<InnerCollection />} />
        <Route path="/innerNfts/:tokenId" element={<InnerNfts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
