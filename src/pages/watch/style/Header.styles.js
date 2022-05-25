import styled from "styled-components";

//base url

import { img_base_url } from "../../../config/imgConfig";

export const StyledHeader = styled.header`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 15, 0.75) 10%, rgba(0, 0, 35, 1)),
    ${({ imgUrl }) => imgUrl && `url(${img_base_url}${imgUrl})`};
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  padding: 135px 260px;
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-template-rows: 140px 140px 145px;
  row-gap: 20px;
  @media screen and (max-width: 600px) {
    padding: 120px 30px;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    row-gap: 25px;
  }
`;

export const Box1 = styled.div`
  grid-row: 1/3;
  img {
    min-width: 150px;
    width: 80%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0px 6px 7px 1px black;
  }
  @media screen and (max-width: 600px) {
    grid-row: 1/1;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
      height: auto;
    }
  }
`;

export const Box2 = styled.div`
  grid-row: 1/3;
  .title {
    font-size: 1.5rem;
  }
  .tagline {
    margin: 5px 0px 15px;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .genres {
    span {
      box-shadow: 0px 0px 3px 0px white;
      display: inline-block;
      margin-right: 15px;
      padding: 3px 12px;
      border-radius: 15px;
      font-size: 12px;
    }
    margin-bottom: 12px;
  }
  .rating {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
  .release-date {
    margin-bottom: 12px;
    font-size: 13px;
    font-weight: 500;
  }
  .des {
    font-size: 13px;
    line-height: 1.2rem;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
    word-spacing: 1px;
  }
  @media screen and (max-width: 600px) {
    grid-row: 2/3;
    text-align: center;
    .title {
      font-size: 1.2rem;
    }
    .tagline {
      font-size: 12px;
    }

    .genres {
      span {
        font-size: 8px;
      }
    }
    .rating {
      font-size: 15px;
    }
    .release-date {
      margin-bottom: 10px;
      font-size: 10px;
    }
    .des {
      font-size: 11px;
      line-height: 1rem;
      margin-bottom: 15px;
    }
  }
`;

export const Box3 = styled.div`
  grid-column: 1/3;
  .credit {
    position: relative;
    width: 80px;
    cursor: pointer;
    img {
      margin: 10px 0px;
      width: 100%;
      height: auto;
      border-radius: 5px;
      box-shadow: 0px 5px 5px 3px black;
    }
    .empty-profile {
      height: 120px;
      border-radius: 5px;
      background-color: grey;
    }
    .name {
      position: absolute;
      inset: 0;
      font-size: 13px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0px 2px;
      letter-spacing: 0.5px;
      line-height: 1.2rem;
      opacity: 0;
      background: rgba(0, 0, 0, 0.8);
      transition: 350ms opacity ease-out;
      &:hover {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 600px) {
    grid-column: 1;
    .credit {
      margin-right: 12px;
    }
  }
`;

export const Button = styled.button`
  font-size: 13px;
  box-shadow: 0px 0px 2px 1px red;
  padding: 4px 30px;
  border-radius: 15px;
  font-weight: 500;
  background: transparent;
  color: white;
  border: 0.5px solid red;
  transition: 450ms ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 20px 2px black;
    background-color: rgb(235, 0, 0);
    border: 0.5px solid #000;
    color: white;
  }
`;
