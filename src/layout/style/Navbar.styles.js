import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const SNav = styled.nav`
  padding: 0px 40px;
  height: 90px;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  width: 100%;
  transition: 500ms background-color ease-in-out;
  background: ${({ isScroll }) => (isScroll ? "rgb(0,0,35)" : "none")};
  .menu {
    transition: 500ms;
  }
  .menu-icon {
    display: none;
    cursor: pointer;
    font-size: 1.7rem;
  }

  .logout {
    .mobile-logout {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: space-between;
    padding: 0px 30px;
    .menu-icon {
      display: block;
    }
    .logout {
      .desktop-logout {
        display: none;
      }
      .mobile-logout {
        display: block;
      }
    }
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: 500;
  ul {
    flex: 1;
    text-align: end;
    margin-top: 10px;
    width: 100%;

    li {
      display: inline-block;
      margin-left: 60px;
      cursor: pointer;
    }

    .wishList {
      display: none;
    }

    li::after {
      content: "";
      display: block;
      width: 0%;
      height: 4px;
      background-color: red;
      margin-top: 5px;
      transition: 350ms ease-out width;
    }
    li:hover::after {
      width: 100%;
    }
  }

  .logout {
    .desktop-logout {
      margin-left: 60px;
      img {
        border-radius: 50%;
        width: 42px;
        height: auto;
      }
      .user-logo {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: bold;
        box-shadow: 0px 0px 6px 1px white;
        cursor: pointer;
      }
    }
    .mobile-logout {
      color: white;
      cursor: pointer;
      margin-bottom: 15px;
      margin-left: 40px;
      width: 100px;
    }
    .mobile-logout::after {
      content: "";
      display: block;
      width: 0%;
      height: 4px;
      background-color: red;
      margin-top: 5px;
      transition: 350ms ease-out width;
    }
    .mobile-logout:hover::after {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    background-color: ${({ isScroll }) =>
      isScroll ? "rgb(0,0,35)" : "rgba(0,0,35,0.95)"};
    margin-top: 15px;
    position: absolute;
    top: 70px;
    left: 0px;
    width: 100%;
    flex-direction: column;
    font-size: 14px;
    transition: 650ms transform cubic-bezier(0.68, -0.55, 0.27, 1.55),
      800ms opacity 500ms ease-in-out;

    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0%)" : "translateY(-200%)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0.3)};

    ul {
      flex: 0;
      text-align: start;
      margin-top: 10px;
      li {
        display: block;
        margin: 13px 40px;
        user-select: none;
      }
      .wishList {
        display: block;
      }
      .dropdown {
        display: none;
      }
      li::after {
        transition: 400ms ease-out width;
      }
      li:hover::after {
        width: 25%;
      }
    }
  }
`;

export const SLink = styled(NavLink)`
  &.active {
    border-bottom: 4px solid red;
    padding-bottom: 5px;
  }
`;

export const SignoutDropdown = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    .dropdown-menu {
      transform: translate(-20%, 25%);
    }
  }
  .dropdown-menu {
    position: absolute;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    transform: translate(-20%, -300%);
    transition: 300ms ease-in-out 200ms transform;
    .menu-item {
      background: ${({ isScroll }) =>
        isScroll ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.5)"};
      box-shadow: 0px 0px 5px 1px white;
      width: 90px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
    }
    .menu-item {
      &:hover {
        background-color: black;
        font-weight: bold;
        box-shadow: 0px 0px 2px 1px white;
      }
    }
  }
`;
