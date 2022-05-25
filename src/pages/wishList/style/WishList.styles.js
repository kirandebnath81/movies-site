import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 70px;

  @media screen and (max-width: 600px) {
    padding: 0px 25px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0px 80px;
`;

export const Card = styled.div`
  position: relative;
  width: 195px;
  margin-right: 29px;
  margin-bottom: 60px;
  div {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: 300ms opacity ease-in-out;
    img {
      width: 38px;
      height: auto;
    }
    &:hover {
      opacity: 1;
    }
    Button {
      margin-top: 10px;
    }
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 10px 8px 3px black;
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    margin: 10px;
  }
`;
