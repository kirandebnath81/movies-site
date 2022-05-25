import styled from "styled-components";

import banner from "../../img/banner.jpg";

export const SFooter = styled.footer`
  height: 450px;
  background: linear-gradient(rgba(0, 0, 30, 1), rgba(0, 0, 35, 0.5) 90%),
    url(${banner});
  background-position: center;
  background-size: cover;
  text-align: center;
  img {
    margin: 100px 0px 10px;
  }
  .copyright {
    width: 70%;
    margin: 20px auto;
    small {
      display: block;
      margin: 15px 0px;
      color: #dcdcdc;
    }
  }

  @media screen and (max-width: 600px) {
    .copyright {
      width: 80%;
      small {
        font-size: 9px;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 60px;
  margin-top: 50px;
  ul {
    text-align: left;
    font-weight: 500;
    li {
      list-style: none;
      margin-bottom: 25px;
      cursor: pointer;
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

  @media screen and (max-width: 600px) {
    padding: 0px 15px;
    ul {
      li {
        list-style: none;
        margin-bottom: 30px;
        cursor: pointer;
        font-size: 11px;
      }
    }
  }
`;
