import "./App.css";
import { useEffect } from "react";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//component
import { Pages } from "./pages/Pages";

//redux
import { login, logout } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";

//firebase
import { auth } from "./config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            profile: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-center" />
      <Pages />
    </>
  );
}

export default App;
