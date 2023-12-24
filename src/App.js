import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import 'swiper/css';
import Footer from "./components/Layout/Footer";
import Products from "./components/Products/Products";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import ProductsDetails from "./components/Products/ProductDetails";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "./store"
import axios from "axios";
import { loadUser } from "./actions/userAction";
import UserOption from "./components/Layout/UserOption";
import Cart from "./components/Cart/Cart";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Profile from "./components/User/Profile";
import Search from "./components/Products/Search";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Dashboard from "./components/Admin/Dashboard";
import Payment from "./components/Cart/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  axios.defaults.withCredentials = true;

  const [stripeApiKey, setStripeApiKey] = useState("");
  // const stripePromise = loadStripe(stripeApiKey);
  async function getStripeApiKey() {
    const { data } = await axios.get("http://localhost:5000/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }


  useEffect(() => {

    store.dispatch(loadUser());
    getStripeApiKey();

  }, [])

  console.log(stripeApiKey);

  return (
    <>
      <Router>
        <Header />
        <ToastContainer />
        {isAuthenticated && <UserOption user={user} />}

        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/products" element={<Products />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="/product/:id" element={<ProductsDetails />}> </Route>
          <Route path="/products/:trimmedKeyword" element={<Products />}> </Route>

          <Route path="/search" element={<Search />}></Route>
          {/* this route will protected  */}
          {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/shipping" element={<Shipping />} />
          </Route> */}

          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }></Route>
          <Route path="/shipping" element={
            <ProtectedRoute>
              <Shipping />
            </ProtectedRoute>
          }></Route>
          <Route path="/account" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }></Route>

          <Route path="/order/confirm" element={
            <ProtectedRoute>
              <ConfirmOrder />
            </ProtectedRoute>
          }></Route>
          {/* <Route path="/process/payment" element={
            <ProtectedRoute>
              <Payment stripe={stripePromise}/>
            </ProtectedRoute>
          }></Route> */}

          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }></Route>

          <Route path="/process/payment" element={
            <ProtectedRoute>
              {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment stripeApiKey={stripeApiKey} />
                </Elements>
              )}
            </ProtectedRoute>
          } ></Route>

        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;
