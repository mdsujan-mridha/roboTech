import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import 'swiper/css';
import Footer from "./components/Layout/Footer";
import Products from "./components/Products/Products";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/products" element={<Products />}> </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
