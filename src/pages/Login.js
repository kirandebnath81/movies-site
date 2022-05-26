import React, { useState } from "react";

//logo
import { FcGoogle } from "react-icons/fc";

import { toast } from "react-toastify";

import {
  Container,
  Box,
  StyledForm,
  Button,
  GoogleBtn,
} from "./style/Login.styles";

//firebase
import { auth } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

//router
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [viewForm, setViewForm] = useState(false);

  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  //getting login input
  const loginHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  //getting sign up input
  const signupHandler = (e) => {
    const { name, value } = e.target;
    setSignupInput((prev) => ({ ...prev, [name]: value }));
  };

  //login
  const submitLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInput;

    if (!email || !password) {
      toast.error("Please fill up the fields", { theme: "dark" });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully", { theme: "dark" });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
  };

  //signup
  const submitSignup = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = signupInput;

    if (!email || !password || !confirmPassword) {
      toast.error("Please fill up the fields", { theme: "dark" });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password does not match", { theme: "dark" });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signed up successfully", { theme: "dark" });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
  };

  //with google
  const submitGoogle = async (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed up successfully", { theme: "dark" });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
  };

  //reset password
  const resetPassword = async () => {
    const { email } = loginInput;

    try {
      const data = await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email has been sent", { theme: "dark" });
      console.log(data);
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
  };

  return (
    <div>
      <Container>
        <Box show={viewForm}>
          <div className="loginBtns">
            <span onClick={() => setViewForm(true)}>
              Login
              <div className="btnIndicator"></div>
            </span>

            <span onClick={() => setViewForm(false)}>Signup</span>
          </div>

          <div className="loginForm">
            <StyledForm>
              <label htmlFor="email121">Email Address</label>
              <input
                type="email"
                id="email121"
                name="email"
                value={loginInput.email}
                placeholder="Enter your Email"
                onChange={loginHandler}
              />
              <label htmlFor="password123">Password</label>
              <input
                type="password"
                id="password123"
                name="password"
                value={loginInput.password}
                placeholder="Enter a Password"
                onChange={loginHandler}
              />
              <Button onClick={submitLogin}>Log in</Button>
              <div>OR</div>
              <GoogleBtn onClick={submitGoogle}>
                <FcGoogle className="googleIcon" /> Continue with Google
              </GoogleBtn>
              <div onClick={resetPassword} className="reset">
                Forget Password
              </div>
            </StyledForm>
          </div>
          <div className="signupForm">
            <StyledForm>
              <label htmlFor="emailId">Email Address</label>
              <input
                type="email"
                id="emailId"
                name="email"
                value={signupInput.email}
                placeholder="Enter your Email"
                onChange={signupHandler}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={signupInput.password}
                placeholder="Enter a Password"
                onChange={signupHandler}
              />
              <label htmlFor="confirm">Confirm Password</label>
              <input
                type="password"
                id="confirm"
                name="confirmPassword"
                value={signupInput.confirmPassword}
                placeholder="Confirm Password"
                onChange={signupHandler}
              />
              <Button onClick={submitSignup}>Sign up</Button>
              <div>OR</div>
              <GoogleBtn onClick={submitGoogle}>
                <FcGoogle className="googleIcon" /> Continue with Google
              </GoogleBtn>
            </StyledForm>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
