import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/homed3js/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Reports  from "./pages/reports/Reports";
// dnndndnv
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/reports" element={<Reports />}/>
          {/* <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
