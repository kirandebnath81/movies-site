import React, { useEffect, useRef, useState } from "react";

//icons
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

//style
import { Dropdown } from "./style/DropDownStyle";

//router
import { Link } from "react-router-dom";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(false);
  };

  const menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Dropdown ref={menuRef}>
      <div className="dropdown-title">
        {isOpen ? (
          <>
            <div onClick={() => setIsOpen(false)}>WatchList</div>
            <IoCaretUp className="dropDownIcon" />
          </>
        ) : (
          <>
            <span onClick={() => setIsOpen(true)}>WatchList</span>
            <IoCaretDown className="dropDownIcon" />
          </>
        )}
      </div>
      <div>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="menu-item" onClick={clickHandler}>
              <Link to={`/watchList`}>WatchList</Link>
            </div>
            <div className="menu-item" onClick={clickHandler}>
              <Link to={`/watched`}>Watched</Link>
            </div>
            <div className="menu-item" onClick={clickHandler}>
              <Link to={`/favourite`}>Favourite</Link>
            </div>
          </div>
        )}
      </div>
    </Dropdown>
  );
};
