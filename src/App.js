import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import 'swiper/css';
import Footer from "./components/Layout/Footer";
import Products from "./components/Products/Products";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import ProductsDetails from "./components/Products/ProductDetails";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/products" element={<Products />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="/product/details" element={<ProductsDetails />}> </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
