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
        <p style={{ fontSize: 12, marginLeft: 50 }}>
          *Images may be inaccurate
        </p>
        <Switch>
          <Route path="/" element={<All />} />
          <Route path="/amazonscraper" element={<AmazonPage />} />
          <Route path="/noonscraper" element={<NoonPage />} />
          <Route path="/alibabascraper" element={<AlibabaPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
