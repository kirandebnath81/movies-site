import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 52px;

  @media only screen and (max-width: 600px) {
    padding: 40px 20px;
  }
`;

export const CardContainer = styled.div`
  margin: 70px 0px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    margin: 0px auto;
  }
  @media screen and (max-width: 600px) {
    margin: 25px 0px;
  }
`;

export const Card = styled.div`
  margin: 0px 18.4px 50px;
  position: relative;
  width: 195px;
  box-shadow: 0px 10px 8px 3px black;
  transition: 300ms transform ease-in-out;
  div {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: 300ms opacity ease-in-out;
    img {
      width: 35px;
      height: auto;
    }

    &:hover {
      opacity: 1;
    }
  }
  img {
    width: 100%;
    border-radius: 10px;
    height: auto;
  }

  &:hover {
    transform: scale(1.04);
  }

  @media screen and (max-width: 600px) {
    width: 120px;
    margin: 15px;
  }
`;

export const InputContainer = styled.div`
  height: 40px;
  width: 500px;
  border-radius: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 5px 0px red;
  transition: 150ms ease-in box-shadow;
  margin: 70px auto 0px;
  &:hover {
    box-shadow: 0px 3px 6px 1px red;
  }
  .searchIcon {
    font-weight: bold;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 600px) {
    width: 250px;
    margin: 25px auto 0px;
  }
`;
export const StyledInput = styled.input`
  height: 37px;
  width: 400px;
  border: none;
  outline: none;
  user-select: none;
  border-radius: 20px;
  text-indent: 10px;
  background: transparent;
  color: white;
  font-size: 17px;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 600px) {
    width: 140px;
  }
`;
