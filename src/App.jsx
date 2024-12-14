import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import AdminHome from './admin/pages/Home';
function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Property />}/>
        <Route path="/admin" element={<AdminHome />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
