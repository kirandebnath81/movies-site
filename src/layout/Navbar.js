import React, { useEffect, useRef, useState } from "react";

//logo
import logo from "../img/logo.png";

//icons
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

//toast
import { toast } from "react-toastify";

//style
import { SNav, NavItems, SLink, SignoutDropdown } from "./style/Navbar.styles";

//component
import { DropdownMenu } from "../components/DropdownMenu";

//router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

//firebase
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const navigate = useNavigate();
  //global state
  const { user } = useSelector((state) => state.auth);

  //local state
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //Change nav background on scroll
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
        return;
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  //Close main menu

  const clickHandler = () => {
    setIsOpen(false);
    window.scroll(0, 0);
  };

  const menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  //signout
  const signOutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Log out successfully", { theme: "dark" });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
  };

  return (
    <SNav isScroll={isScroll}>
      <Link to={`/`}>
        <img src={logo} alt="" onClick={clickHandler} />
      </Link>

      <NavItems isOpen={isOpen} isScroll={isScroll} ref={menuRef}>
        <ul>
          <li onClick={clickHandler}>
            <SLink to={`/movies`}>Movies</SLink>
          </li>
          <li onClick={clickHandler}>
            <SLink to={`/tvSeries`}>Tv Series</SLink>
          </li>

          <li className="wishList" onClick={clickHandler}>
            <SLink to={`/watchList`}>WatchList</SLink>
          </li>
          <li className="wishList" onClick={clickHandler}>
            <SLink to={`/watched`}>Watched</SLink>
          </li>
          <li className="wishList" onClick={clickHandler}>
            <SLink to={`/favourite`}>Favourite</SLink>
          </li>

          <li className="dropdown">
            <DropdownMenu />
          </li>

          {!user && (
            <li className="login" onClick={clickHandler}>
              <SLink to={"/login"}>Login/Signup</SLink>
            </li>
          )}
        </ul>

        <div className="logout" onClick={clickHandler}>
          {user && (
            <div>
              <div className="mobile-logout" onClick={signOutHandler}>
                Sign out
              </div>

              <div className="desktop-logout">
                <SignoutDropdown>
                  {user && user.profile ? (
                    <img src={user.profile} alt="profile" />
                  ) : (
                    <div className="user-logo">
                      {user.email?.slice(0, 1).toUpperCase()}
                    </div>
                  )}

                  <div className="dropdown-menu">
                    <div className="menu-item" onClick={signOutHandler}>
                      Sign out
                    </div>
                  </div>
                </SignoutDropdown>
              </div>
            </div>
          )}
        </div>
      </NavItems>

      <div className="menu">
        {isOpen ? (
          <FaTimes className="menu-icon" onClick={() => setIsOpen(false)} />
        ) : (
          <GiHamburgerMenu
            className="menu-icon"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </SNav>
  );
};
