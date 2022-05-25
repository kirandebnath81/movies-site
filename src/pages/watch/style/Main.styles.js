import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 100px;
  h4 {
    margin-left: 5px;
    margin-bottom: 20px;
    font-weight: 500;
    letter-spacing: 2.3px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 30px;
    h2 {
      margin-left: 10px;
    }
  }
`;

export const TrailerCard = styled.div`
  margin-bottom: 120px;
  .player-wrapper {
    box-shadow: 0px 10px 10px 5px rgb(0, 0, 0);
    position: relative;
    padding-top: 52.5%;
    /* Player ratio: 100 / (1280 / 720) */
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 80px;
    .player-wrapper {
      padding-top: 55.25%;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  width: 150px;
  margin: 15px 13px;
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
    }

    &:hover {
      opacity: 1;
    }
  }
  img {
    width: 100%;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.04);
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    margin: 15px 11px;
  }
`;
