import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  .dropdown-title {
    display: flex;
    align-items: center;
    user-select: none;
  }

  .dropDownIcon {
    font-size: 1.3rem;
    margin-left: 2px;
  }

  .dropdown-menu {
    user-select: none;
    position: absolute;
    top: 40px;
    left: -30px;
    width: 160px;
    background: ${({ isScroll }) =>
      isScroll ? "rgba(0, 0, 60,0.9)" : "rgba(0, 0, 60, 0.5)"};
    box-shadow: 0px 0px 1px 1px white;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;

    .menu-item {
      text-align: start;
      cursor: pointer;
      padding: 10px 15px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      transition: 200ms ease-in;

      &:hover {
        background-color: black;
        box-shadow: 0px 0px 2px 0.4px white;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    color: white;
    margin: 10px 0px 15px;

    .dropdown-menu {
      transform: translate(110%, -80%);
    }
  }
`;
