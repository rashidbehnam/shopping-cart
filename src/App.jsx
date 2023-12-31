import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import Product from "./Components/Product";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const exist = cartItems.some((c) => c.id === item.id);
    if (exist) {
      setCartItems((prev) =>
        prev.map((c) => (c.id === item.id ? { ...c, qty: c.qty++ } : c)),
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, qty: 1 }]);
    }
  }

  function increaseQty(id) {
    setCartItems((prev) =>
      prev.map((c) => (c.id === id ? { ...c, qty: c.qty++ } : c)),
    );
  }
  function decreaseQty(id) {
    setCartItems((prev) =>
      prev.map((c) => (c.id === id && c.qty > 1 ? { ...c, qty: c.qty-- } : c)),
    );
  }
  function setQty(id, value) {
    setCartItems((prev) =>
      prev.map((c) => (c.id === id ? { ...c, qty: value } : c)),
    );
  }
  function deleteItem(id) {
    setCartItems((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <BrowserRouter>
      <>
        <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
          <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-3 h-6 text-blue-500 sm:h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>

              <span className="self-center whitespace-nowrap text-xl font-semibold">
                Termcode
              </span>
            </a>

            <div className="mt-2 sm:mt-0 sm:flex md:order-2">
              <Link to="/cart" className="text-blue-500 relative">
                <div className="bg-red-700 text-white font-bold h-6 w-6 rounded-full flex justify-center items-center absolute -top-1 -right-1 z-1">
                  {cartItems.length}
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
              id="navbar-sticky"
            >
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
                <li>
                  <Link
                    to="/"
                    href="#"
                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="pt-32  bg-white">
                  <h1 className="text-center text-2xl font-bold text-gray-800">
                    All Products
                  </h1>
                </div>

                <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Architecto</span>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Corrupti</span>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Excepturi</span>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                    <span>Consectetur</span>
                  </a>
                </div>
                <section className="py-10 bg-gray-100">
                  <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((item) => (
                      <Product key={item.id} {...item} addToCart={addToCart} />
                    ))}
                  </div>
                </section>
              </>
            }
          />
          <Route path="/details/:id" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                setQty={setQty}
                deleteItem={deleteItem}
              />
            }
          />
        </Routes>

        <footer className="py-6  bg-gray-200 text-gray-900">
          <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
            <div className="grid justify-center  lg:justify-between">
              <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                <span>Copy rgight © 2023 by codemix team </span>
                <a rel="noopener noreferrer" href="#">
                  <span>Privacy policy</span>
                </a>
                <a rel="noopener noreferrer" href="#">
                  <span>Terms of service</span>
                </a>
              </div>
              <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
