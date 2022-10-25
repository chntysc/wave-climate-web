import React from "react";
import TentangKami from "../tentangkami/TentangKami";
import Home from "../home/Home";
import Data from "../data/Data";
import { Route, Switch, useLocation } from "react-router-dom";
import WppRi from "../wppri/WPPRI";
import Iklim from "../iklim/Iklim";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
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
        <Route path="/iklim">
          <Iklim />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
