import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .genres {
    user-select: none;
    padding: 4px 15px;
    font-size: 15px;
    box-shadow: 0px 5px 5px 3px black;
    cursor: pointer;
    margin: 0px 20px 25px 0px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .deleteIcon {
      font-size: 15px;
      margin-left: 6px;
      color: red;
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    .genres {
      font-size: 9px;
      padding: 2px 8px;
      margin-right: 14px;
      margin-bottom: 15px;
    }
    .selectedGenres {
      .deleteIcon {
        font-size: 8px;
        margin-left: 3px;
      }
    }
  }
`;
