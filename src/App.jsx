import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import AdminHome from './admin/pages/Home';
import AddProperty from './admin/pages/AddProperty';
import PropertyList from './admin/pages/PropertyList';

function App() {

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      {/* Show Navbar only on Clientside */}
      {!isAdminRoute && <Navbar />}
      <Routes>

        {/* Client Side routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Property />} />

        {/* Admin Routes */}
{/* Wrapped Admin Route to work together dynamically */}
        <Route path="/admin" element={<AdminHome />} >
        <Route path='add-property' element={<AddProperty />}/>
        <Route path="list-property" element={<PropertyList />}/>
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
