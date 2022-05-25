import styled from "styled-components";

export const Box = styled.div`
  .paginateContaner {
    margin: 70px auto 100px;
    border-radius: 10px;
    width: 100%;
    height: 55px;
    box-shadow: 0px 8px 15px 7px black;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      cursor: pointer;
      padding: 5px 10px;
      margin-right: 25px;
      font-weight: 500;
      /* border-radius: 20%; */
      border: 1.5px solid black;
      transition: 300ms border ease-out;
      &:hover {
        border: 1.5px solid #ff1a1a;
      }
    }
  }
  .active {
    a {
      border: 1.5px solid #ff1a1a;
      box-shadow: 0px 0px 5px 1px #ff1a1a;
    }
  }
  @media screen and (max-width: 600px) {
    .paginateContaner {
      width: 100%;
      height: 40px;
      a {
        font-size: 8px;
        margin-right: 7px;
        padding: 2px 4px;
      }
    }
  }
`;
