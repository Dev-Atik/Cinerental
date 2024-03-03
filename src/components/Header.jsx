/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import cart from "../assets/shopping-cart.svg";
import { ThemeContext, movieContext } from "../context/context";
import CartDetails from "./movie/CartDetails";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const { state } = useContext(movieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleShowCart() {
    setShowCart(true);
  }

  return (
    <header>
      {showCart && <CartDetails onclose={() => setShowCart(false)} />}
      <nav className="container m-auto flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleShowCart}
            >
              <img src={cart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-15px] left-[28px] bg-[#12CF6F] text-white text-center p-[0px] w-[25px] h-[25px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
