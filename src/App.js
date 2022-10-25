import "./App.css";
import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import TentangKami from "./components/tentangkami/TentangKami";
import Footer from "./components/tentangkami/fragments/footer/Footer";
import Home from "./components/home/Home";
import Data from "./components/data/Data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WppRi from "./components/wppri/WPPRI";
import Dashboard from "./components/dashboard/Dashboard";
import Iklim from "./components/iklim/Iklim";
import { BiMenu } from "react-icons/bi";
import Header from "./components/header/Header";
const App = () => {
  const [pageChanging, setPageChanging] = useState(false);
  const [clickBackground, setClickBackground] = useState(false);
  function handleSidebar(collapsed) {
    collapsed ? setPageChanging(false) : setPageChanging(true);
  }
  function handleClick() {
    clickBackground ? setClickBackground(false) : setClickBackground(true);
  }
  return (
    <Router>
      <div className="body">
        <div className="sidebar">
          <Sidebar handleSidebar={handleSidebar} clickBackground={clickBackground} setClickBackground={setClickBackground} />
        </div>
        <div className={pageChanging ? "overlay" : ""} onClick={handleClick}></div>
        <div className="page">
          <div className="navbar">
            <BiMenu className="navbar-icon" />
          </div>
          <Header />
          <>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/data">
                <Data />
              </Route>
              <Route path="/tentang-kami">
                <TentangKami />
              </Route>
              <Route path="/wpp-ri">
                <WppRi />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/iklim">
                <Iklim />
              </Route>
            </Switch>
          </>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
