import "./App.css";
import Navbar from "./components/Navbar.js";
import Marketplace from "./components/Marketplace";
import Profile from "./components/Profile";
import SellNFT from "./components/SellNFT";
import NFTPage from "./components/NFTpage";
import DashBoard from "./components/DashBoard";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InnerCollection from "./components/InnerCollection";
import InnerNfts from "./components/InnerNFts";
//this is the root component and inside this component is returns the App method with routes to differnt pages.

function App() {
  return (
    // this is JSX, the bubble will conver the JSX to HTML and renders to the DOM.
    <div className="container">
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/nftPage" element={<NFTPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sellNFT" element={<SellNFT />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/innerCollection" element={<InnerCollection />} />
        <Route path="/innerNfts" element={<InnerNfts />} />
      </Routes>
    </div>
    // the difference between JSX and HTML is that we cannot just use class , we have to use
    // className for the id parameter.
    // class is a reserved keyboard in react and this will changes the className into class in the page of the
    //HTML.
  );
}

export default App;
