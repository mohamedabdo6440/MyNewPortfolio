import React, { memo, useEffect } from "react";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { signInWithGoogle } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = memo(() => {
  const provider = new GoogleAuthProvider();
  const providerFB = new FacebookAuthProvider();
  const navigate = useNavigate();
  const singGoogle = () => {
    signInWithGoogle(provider)
      .then((result) => {
        toast.success("Welcome " + result.user.displayName + " 😍", {
          theme: "dark",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error, {
          theme: "dark",
        });
      });
  };
  const singFb = () => {
    signInWithGoogle(
      providerFB.setCustomParameters({
        display: "popup",
      })
    )
      .then((result) => {
        toast.success("Welcome " + result.user.displayName + " 😍", {
          theme: "dark",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, {
          theme: "dark",
        });
      });
  };
  useEffect(() => {
    document.title = "Mohamed Abdo | Login";
  }, []);
  return (
    <motion.section
      layout
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="bg-[#0f1922] editSection flex items-center justify-center"
    >
      <div className="containerEdit text-center ">
        <h2 className="uppercase text-[#04c2c9]">you can login or register </h2>
        <div className="login mt-4 grid justify-center gap-6">
          <button
            className="loginBtn   bg-[#0B1118] inline-block text-white py-3 px-7 select-none cursor-pointer"
            onClick={singGoogle}
          >
            <div className="textBtn flex items-center justify-center gap-3">
              <div>
                <SiGmail className="text-xl text-orange-500" />
              </div>{" "}
              <div className="loginBtn__end mt-1 ">
                Login With
                <span className="text-lg">
                  <span className="text-blue-500"> g</span>
                  <span className="text-red-600">o</span>
                  <span className="text-orange-500">o</span>
                  <span className="text-green-600">g</span>
                  <span className="text-blue-500">l</span>
                  <span className="text-red-600">e</span>
                </span>
              </div>
            </div>
            <div className="loginBtn__horizontal"></div>
            <div className="loginBtn__vertical"></div>
          </button>
          <button
            className="loginBtn   bg-[#0B1118] inline-block text-white py-3 px-7 select-none cursor-pointer"
            onClick={singFb}
          >
            <div className="textBtn flex items-center justify-center gap-3">
              <div>
                <FaFacebookF className="text-xl text-blue-600" />
              </div>{" "}
              <div className="loginBtn__end mt-1 ">
                Login With
                <span className="text-lg">
                  <span className="text-blue-600"> facebook</span>
                </span>
              </div>
            </div>
            <div className="loginBtn__horizontal"></div>
            <div className="loginBtn__vertical"></div>
          </button>
        </div>
      </div>
    </motion.section>
  );
});

export default Login;
