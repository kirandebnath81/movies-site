import styled from "styled-components";

import background from "../img/background.jpg";

export const Container = styled.div`
  padding: 100px 52px;

  @media only screen and (max-width: 600px) {
    padding: 100px 25px;
  }
  @media only screen and (max-width: 601px) and (max-width: 1000px) {
    padding: 0px 42px;
  }
`;

export const StyledHeader = styled.div`
  background-image: linear-gradient(rgba(0, 0, 30, 0) 90%, rgba(0, 0, 30, 1)),
    url(${background});
  background-size: cover;
  background-position: center;
  height: 350px;

  @media screen and (max-width: 600px) {
    height: 150px;
  }
`;
