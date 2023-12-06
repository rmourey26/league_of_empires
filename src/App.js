import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomepageVideo from "./pages/HomepageVideo";
import ItemDetail from "./pages/ItemDetail";
import Marketplace from "./pages/Marketplace";
import HomepageImg from "./pages/HomepageImg.js";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageVideo />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/homepageimg" element={<HomepageImg />} />
      </Routes>
    </Router>
  );
}

export default App;
