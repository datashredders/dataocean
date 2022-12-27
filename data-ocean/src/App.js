import "./App.css";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import kanalbazliistatistikler from "./components/pages/KanalBazlıİstatistikler/kanalbazliistatistikler";
// import Genelistatistikler from "./components/pages/Genelistatistikler/Genelistatistikler";
import Data from "./components/pages/Table/Data";
import MuzikData from "./components/pages/muzikTable/MuzikData";
import HaberData from "./components/pages/haberTable/HaberData";
import BelgeselData from "./components/pages/belgeselTable/BelgeselData";
import EgitimData from "./components/pages/egitimTable/EgitimData";
import KulturData from "./components/pages/kulturTable/KulturData";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/kanalbazliistatistikler"
          component={kanalbazliistatistikler}
        />
        {/* <Route path="/Genelistatistikler" component={Genelistatistikler} /> */}
        <Route path="/Data" component={Data} />
        <Route path="/MuzikData" component={MuzikData} />
        <Route path="/HaberData" component={HaberData} />
        <Route path="/EgitimData" component={EgitimData} />
        <Route path="/KulturData" component={KulturData} />
        <Route path="/BelgeselData" component={BelgeselData} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
