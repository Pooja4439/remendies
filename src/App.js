import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
  
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/cat/:id" exact={true} element={<Listing />} />
      </Routes>
      <Footer /> {/* ✅ Corrected this line */}
    </BrowserRouter>
  );
}

export default App;
