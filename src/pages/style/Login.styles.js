import styled from "styled-components";

export const Container = styled.header`
  height: 120vh;
  background-color: rgb(0, 0, 30);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 120px;
`;

export const Box = styled.div`
  margin-top: 70px;
  box-shadow: 0px 0px 12px 1px white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 470px;
  width: 400px;
  overflow: hidden;
  position: relative;
  .loginBtns {
    display: flex;
    .btnIndicator {
      height: 4px;
      margin: 6px auto 0px;
      width: 70%;
      background-color: rgb(230, 0, 0);
      transition: 600ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
      transform: ${({ show }) => (show ? `translate(0%)` : "translate(144%)")};
    }
  }
  span {
    width: 100px;
    height: 50px;
    text-align: center;
    padding-top: 10px;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
  }
  .loginForm {
    transition: 600ms transform cubic-bezier(0.68, -0.55, 0.27, 1.55);
    position: absolute;
    top: 100px;
    padding: 0px 45px;
    transform: ${({ show }) => (show ? `translate(0%)` : "translate(120%)")};
  }
  .signupForm {
    transition: 600ms transform cubic-bezier(0.68, -0.55, 0.27, 1.55);
    position: absolute;
    top: 60px;
    padding: 10px 45px;
    transform: ${({ show }) => (show ? `translate(-120%)` : "translate(0%)")};
  }
  @media screen and (max-width: 600px) {
    width: 330px;
    .loginForm {
      padding: 0px 30px;
    }
    .signupForm {
      padding: 10px 30px;
    }
  }
`;

export const StyledForm = styled.form`
  input {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    box-shadow: inset 0px 0px 5px 1.5px white;
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
    user-select: none;
    outline: none;
    text-indent: 15px;
    border-radius: 8px;
    border: none;
    font-size: 15px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    transition: 300ms ease-out all;
    &:hover {
      background-color: black;
      box-shadow: inset 0px 0px 2px 1px white;
    }
  }
  label {
    display: inline-block;
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  div {
    text-align: center;
    margin: 8px 0px 7px;
    font-size: 15px;
    font-weight: 500;
  }
  .reset {
    margin-top: 25px;
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  box-shadow: inset 0px 0px 5px 2px red;
  border: none;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin-top: 3px;
  transition: 300ms ease-in background-color;
  &:hover {
    background-color: rgb(250, 0, 0);
  }
`;

export const GoogleBtn = styled.button`
  box-shadow: inset 0px 0px 5px 1px white;
  background-color: black;
  color: white;
  border: 1px solid white;
  width: 100%;
  height: 38px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  .googleIcon {
    font-size: 1.3rem;
    margin-right: 10px;
  }
  margin-top: 5px;
  transition: 300ms ease-in background-color;
  &:hover {
    background-color: white;
    color: black;
  }
`;
