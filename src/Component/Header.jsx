import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseCircleLine } from "react-icons/ri";
import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import "./Header.css";
import SocialLinks from "./SocialLinks/SocialLinks";
import { db, singout } from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const nav = useRef();
  const info = useRef();
  const login = useSelector((ele) => ele.auth.isLoggedin);
  const loginInfo = useSelector((ele) => ele.auth);
  useEffect(() => {
    function handleClickOutside(event) {
      if (info.current && !info.current.contains(event.target)) {
        setOpenLogin(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [info]);
  const user = () => {
    let sub = onSnapshot(
      query(collection(db, "users"), orderBy("timestamp", "asc")),
      (snapshot) => {
        let fetch = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        fetch.forEach((ele) => (ele.timestamp = ""));
      }
    );
    return sub;
  };
  const logoutsend = () => {
    singout()
      .then(() => {
        toast.success("Log Out Successful 👋", {
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.error("Error Happend", {
          theme: "dark",
        });
      });
  };
  useEffect(() => {
    user();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        if (nav.current.classList.contains("active")) {
        } else {
          nav.current.classList.add("active");
        }
      } else {
        if (nav.current.classList.contains("active")) {
          nav.current.classList.remove("active");
        } else {
        }
      }
    });
  }, []);
  return (
    <div ref={nav} className="nav fixed  top-0 left-0 right-0">
      <div className="flex z-50 items-center justify-between containerEdit py-3 ">
        <Link to="/" className="flex items-center gap-3">
          <div className="logo flex  items-center gap-2">
            <img className="w-8" src="./img/7511325-ai.png" alt="" />
          </div>
          <h2 className=" text-white pt-2 text-3xl">Mohamed Abdo</h2>
        </Link>
        <div className="flex items-center gap-5">
          <ul className=" items-center gap-5 hidden md:flex">
            <li
              className="capitalize text-white font-semibold hover:text-[#ea4343] duration-700 "
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to="/">home</NavLink>
            </li>
            <li
              className="capitalize text-white font-semibold hover:text-[#ea4343] duration-700 "
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to="/about">about</NavLink>
            </li>
            {/* <li
              className="capitalize text-white font-semibold hover:text-[#ea4343] duration-700 "
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to="/projects">projects</NavLink>
            </li> */}
            <li
              className="capitalize text-white font-semibold hover:text-[#ea4343] duration-700 "
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
          {/* Respons */}
          <div
            className="menu relative z-10 flex md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? (
              <RiMenu3Fill className=" text-3xl cursor-pointer text-white hover:text-[#ea4343] duration-700" />
            ) : (
              <div className="fixed top-[20px] right-[20px] ">
                <RiCloseCircleLine className=" text-3xl cursor-pointer text-white hover:text-[#ea4343] duration-700" />
              </div>
            )}
          </div>
          <ul
            className={`z-[1] bg-[#333] gap-5 fixed top-0 right-0 min-h-screen w-full select-none sm:w-1/2 flex  md:hidden px-9 duration-500  justify-center flex-col ${
              open ? "right-0" : "right-[-100%]"
            }`}
          >
            <div className="logo flex  items-center gap-2 pb-8 pl-8 relative w-fit ">
              <img className="w-11" src="./img/7511325-ai.png" alt="" />
              <div className="circle w-[120px]">
                <img src="./img/circleName.png" alt="" />
              </div>
            </div>
            <li
              className="capitalize text-white hover:text-[#ea4343] duration-700"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link to="/">home</Link>
            </li>
            <li
              className="capitalize text-white hover:text-[#ea4343] duration-700"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link to="/about">about</Link>
            </li>
            {/* <li
              className="capitalize text-white hover:text-[#ea4343] duration-700"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link to="/projects">projects</Link>
            </li> */}
            <li
              className="capitalize text-white hover:text-[#ea4343] duration-700"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link to="/contact">contact</Link>
            </li>
            <SocialLinks />
          </ul>
          {!login ? (
            <ul>
              <li className="capitalize text-white font-semibold">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          ) : (
            <div className="relative select-none" ref={info}>
              <div
                className="w-10 h-10 relative cursor-pointer"
                onClick={() => {
                  setOpenLogin(!openLogin);
                }}
              >
                <div className="h-3 w-3 flex items-center justify-center right-[1px] bg-white absolute rounded-full text-[#333] bottom-[-10%]">
                  <BsCaretDownFill className="pt-[2px]" />
                </div>
                <div className="editImg w-10 h-10">
                  <div className="loadImg w-10 h-10  absolute bg-white rounded-full"></div>
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => {
                      e.target.remove();
                    }}
                    onLoad={(e) => {
                      e.target.parentElement.querySelector(".loadImg").remove();
                    }}
                    src={loginInfo.img}
                    alt=""
                  />
                </div>
              </div>
              {openLogin ? (
                <div className="bg-[#0b1218] openLogin  z-10 w-[300px] absolute right-0 top-[125%] text-white py-2 px-4 rounded-lg   active ">
                  <div className="px-3 py-2 flex gap-4 items-center  rounded-lg hover:bg-[#060b10] duration-700 cursor-pointer">
                    <div className="editImg w-11 h-11">
                      <div className="loadImg w-11 h-11 absolute bg-white rounded-full"></div>
                      <img
                        className="w-11 h-11 object-cover rounded-full"
                        onError={(e) => {
                          e.target.remove();
                        }}
                        onLoad={(e) => {
                          e.target.parentElement
                            .querySelector(".loadImg")
                            .remove();
                        }}
                        src={loginInfo.img}
                        alt=""
                      />
                    </div>
                    <span>{loginInfo.useName}</span>
                  </div>
                  <p
                    className="px-3 py-1 capitalize text-white font-semibold cursor-pointer rounded-lg  hover:bg-[#060b10] duration-700"
                    onClick={logoutsend}
                  >
                    Log Out
                  </p>
                </div>
              ) : (
                <div className="bg-[#0b1218] openLogin z-10 w-[300px] absolute right-0 top-[125%] text-white py-2 px-4 rounded-lg ">
                  <div className="px-3 py-2 flex gap-4 items-center  rounded-lg hover:bg-[#060b10] duration-700 cursor-pointer">
                    <div className="editImg w-11 h-11">
                      <div className="loadImg w-11 h-11 absolute bg-white rounded-full"></div>
                      <img
                        className="w-11 h-11 object-cover rounded-full"
                        onError={(e) => {
                          e.target.remove();
                        }}
                        onLoad={(e) => {
                          e.target.parentElement
                            .querySelector(".loadImg")
                            .remove();
                        }}
                        src={loginInfo.img}
                        alt=""
                      />
                    </div>
                    <span>{loginInfo.useName}</span>
                  </div>
                  <p
                    className=" my-1 px-3 py-1 capitalize text-white font-semibold cursor-pointer rounded-lg   hover:bg-[#060b10] duration-700"
                    onClick={logoutsend}
                  >
                    Change Image
                  </p>
                  <p
                    className="px-3 py-1 capitalize text-white font-semibold cursor-pointer rounded-lg  hover:bg-[#060b10] duration-700"
                    onClick={logoutsend}
                  >
                    Log Out
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
