import styled from "styled-components";

export const CardContainer = styled.div`
  margin-bottom: ${({ large }) => (large ? "70px" : "50px")};
  color: white;
  h4 {
    margin: 50px 0px 5px 15px;
    font-weight: 500;
    letter-spacing: 2.3px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: ${({ large }) => (large ? "163px" : "205px")};
  margin: ${({ large }) => (large ? "20px 15px" : "20px 13px")};
  box-shadow: 0px 10px 8px 3px black;
  border-radius: 5px;
  transition: 350ms transform ease-out;
  &:hover {
    transform: ${({ large }) => (large ? " scale(1.08)" : " scale(1.075)")};
  }

  .poster {
    width: 100%;
    height: auto;
    border-radius: ${({ large }) => (large ? "10px" : "5px")};
  }

  .media-content {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7));
    opacity: 0;
    transition: 350ms ease-in-out opacity;

    .logo {
      width: 30px;
      margin-bottom: 5px;
    }

    .title {
      font-size: 13px;
      line-height: 1.2rem;
      padding: 0px 5px;
      text-align: center;
      font-weight: 500;
    }
    &:hover {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    width: ${({ large }) => (large ? "130px" : "300px")};
    margin: ${({ large }) => (large ? "20px 25px" : "20px 25px")};
  }
`;
