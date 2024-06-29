import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css'
// import Navheader from "./components/Layouts/Navheader";
import Home from "./components/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
// import Navfooter from "./components/Layouts/Navfooter";
import Front from "./components/Front";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Layout from "./components/Layout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const addProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      if (ProductExist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
              : item
          )
        );
      }
    } else {
      // Product does not exist in the cart, so add it
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  console.log(cartItems);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={
            <Layout cartItems={cartItems}>
              <Routes>
                <Route path="/shop" element={<Home handleClick={handleClick} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/cart"
                  element={
                    <Cart
                      cartItems={cartItems}
                      handleClick={handleClick}
                      removeProduct={removeProduct}
                      addProduct={addProduct}
                    />
                  }
                />
                <Route path="/home" element={<Front />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
