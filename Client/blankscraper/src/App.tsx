import React from "react";
import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./Styles/App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import All from "./Pages/index";
import AmazonPage from "./Pages/Amazon";
import NoonPage from "./Pages/Noon";
import AlibabaPage from "./Pages/Alibaba";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/all" element={<All />} />
          <Route path="/amazonscraper" element={<AmazonPage />} />
          <Route path="/noonscraper" element={<NoonPage />} />
          <Route path="/alibabascraper" element={<AlibabaPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
