import styled from "styled-components";

//img base
import { img_base_url } from "../../../config/imgConfig";

export const Container = styled.header`
  height: 560px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 25, 0.75) 85%, rgba(0, 0, 35, 1)),
    ${({ imgUrl }) => imgUrl && `url(${img_base_url}${imgUrl})`};
  background-size: cover;
  background-position: center;
  cursor: grab;
  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    height: 700px;
  }
  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 120px 100px;

  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    padding: 190px 10px;
  }

  @media only screen and (max-width: 600px) {
    padding: 140px 30px 100px;
  }
`;

export const StyledCol = styled.div`
  flex-basis: 40%;

  img {
    min-width: 180px;
    height: auto;
    width: 60%;
    border-radius: 10px;
    margin-left: 65px;
    box-shadow: 0px 6px 7px 1px black;
  }
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 14px;
    line-height: 1.3rem;
    margin: 12px 0px 40px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    h1 {
      font-size: 2.2rem;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
    }
    p {
      font-size: 12px;
      line-height: 1.2rem;
      text-align: center;
      margin: 12px 0px 30px;
    }
    margin-bottom: 50px;
    img {
      margin-left: 0px;
    }
  }
`;

export const Button = styled.button`
  padding: 8px 15px;
  font-weight: 500;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: inset 0px 0px 2px 1px white;
  border: none;
  transition: 500ms ease-out;
  &:hover {
    transform: scale(1.05);
    background-color: black;
    color: white;
    box-shadow: inset 0px 0px 5px 1px white;
  }
`;
