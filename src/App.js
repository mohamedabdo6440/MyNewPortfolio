import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Page/Footer/Footer";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {  auth } from "./firebase/firebase";
import { SET_ACTICE_USER ,REMOVE_ACTICE_USER} from './Redux/authSlice/authSlice';
import Contact from "./Page/Contact/Contact";
import About from "./Page/About/About";
import Projects from "./Page/Projects/Projects";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(SET_ACTICE_USER({
          email :user.email,
          displayName :user.displayName,
          photoURL :user.photoURL,
          uid :user.uid,
        }))
      } else {
        dispatch(REMOVE_ACTICE_USER())
      }
    });
  }, [dispatch]);
  return (
    <div className="App ">
      <div className="fullHight">
      <Header />
      <ScrollToTop/>
      <ToastContainer className="toastContainer" />
        <div className="countHight">
          <AnimatePresence  mode="sync">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
