import React, { memo, useEffect, useRef } from "react";
import SocialLinks from "../../Component/SocialLinks/SocialLinks";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineMore } from "react-icons/ai";
import { BsChatDots, BsEmojiSmile } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { Rate } from "antd";
import { useSelector } from "react-redux";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../Component/Loading/Loading";
import EmojiPicker from "emoji-picker-react";
import { motion } from "framer-motion";
const Home = memo(() => {
  const textareaControl = useRef();
  const roteey = useRef();
  const emo = useRef();
  const loginInfo = useSelector((ele) => ele.auth);
  const { pathname } = useLocation();
  const [openOmj, setOpenOmj] = useState(false);
  const [cv, setCv] = useState(false);
  const [comment, setComment] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [rateInput, setRateInput] = useState(2.5);
  const [numOfView, setNumOfView] = useState(3);
  useEffect(() => {
    function handleClickOutside(event) {
      if (emo.current && !emo.current.contains(event.target)) {
        setOpenOmj(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emo]);
  const user = () => {
    let sub = onSnapshot(
      query(collection(db, "users"), orderBy("timestamp", "desc")),
      (snapshot) => {
        let fetch = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setComment(fetch);
      }
    );
    return sub;
  };
  const cvLink = () => {
    let sub = onSnapshot(query(collection(db, "cvLink")), (snapshot) => {
      let fetch = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setCv(fetch[0]);
    });
    return sub;
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      roteey.current.classList.add("roteeyNow");
      if (roteey.current.innerText === "Front-End") {
        roteey.current.innerText = "Developer";
      } else if (roteey.current.innerText === "Developer") {
        roteey.current.innerText = "Coder";
      } else {
        roteey.current.innerText = "Front-End";
      }
    }, 5000);
    return () => clearInterval(myInterval);
  }, [pathname]);
  useEffect(() => {
    document.title = "Mohamed Abdo | Home";
    window.addEventListener("mousemove", (e) => {
      if (document.querySelectorAll(".mouseMove")) {
        document.querySelectorAll(".mouseMove").forEach((layer) => {
          let speed = layer.getAttribute("data-speed");
          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
    });
    user();
    cvLink();
  }, []);
  const sendComment = (e) => {
    e.preventDefault();
    if (commentInput.trim().length < 5) {
      toast.error("Comment Is less than 5 char", {
        theme: "dark",
      });
    } else {
      addDoc(collection(db, "users"), {
        name: loginInfo.useName ? loginInfo.useName + " 😍😍" : "Supporter 😍",
        comment: commentInput,
        email: loginInfo.email
          ? loginInfo.email
          : Math.random * 1000212546541231,
        img: loginInfo.img
          ? loginInfo.img
          : "https://firebasestorage.googleapis.com/v0/b/protofolio-64812.appspot.com/o/New%20Project%20(2).png?alt=media&token=81b54aaf-6768-4cd9-ac63-52b6733a533b",
        rate: rateInput,
        timestamp: serverTimestamp(),
      }).then(
        toast.success("Comment added 🌹", {
          theme: "dark",
        })
      );
      setRateInput(2.5);
      setCommentInput("");
      textareaControl.current.style.height = "";
    }
  };
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <motion.section
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className=" bg-[#0f1922] editSection flex justify-center items-center pb-0 "
      >
        <div className="containerEdit flex flex-wrap reverceContral items-center justify-between ">
          <div className="info text-center md:text-left  md:w-1/2 w-full">
            <p className="text-white text-xl font-bold">Hello, I'm</p>
            <h1 className="font-bold text-3xl md:text-5xl mt-6  text-[#ea4343]">
              {" "}
              <Typewriter
                options={{
                  strings: ["Mohamed Abdo"],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                  deleteSpeed: 300,
                }}
              />
            </h1>
            <div className="text text-3xl text-white my-5">
              <span className="font-semibold">Creative</span>{" "}
              <div className="relative inline-block">
                <p ref={roteey} className=" font-bold roteey ">
                  Front-End
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:block">
              <SocialLinks />
            </div>
            <div className="btn text-center flex justify-center items-center  md:justify-start my-6">
              {cv && (
                <a
                  href={cv.url}
                  target="_blank"
                  className="glow-on-hover flex justify-center items-center"
                  type="button"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              )}
            </div>
            <div className="btn flex flex-col md:flex-row items-center justify-center md:justify-start  gap-3">
              <Link
                to="/contact"
                className="glow-on-hover flex items-center justify-center gap-2"
                type="button"
              >
                Say Hello <MdOutlineMailOutline className="text-xl" />
              </Link>
              <Link to="/about" className="text-xl font-semibold text-white">
                About Me
              </Link>
            </div>
          </div>
          <div className="infoImg mb-12 md:mb-0  md:w-1/2 w-full">
            <div className="mx-auto img w-[200px] h-[200px]  md:w-[300px] md:h-[300px]   md:ml-auto md:mr-0 relative">
              <img
                className="mouseMove hidden lg:block"
                data-speed="-3"
                src="./img/11.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="3"
                src="./img/10.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="-3"
                src="./img/9.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="3"
                src="./img/8.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="-3"
                src="./img/7.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="3"
                src="./img/6.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="-3"
                src="./img/5.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="3"
                src="./img/4.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="-3"
                src="./img/3.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="3"
                src="./img/2.png"
                alt=""
              />
              <img
                className="mouseMove hidden lg:block"
                data-speed="-3"
                src="./img/1.png"
                alt=""
              />
              <img
                className="w-[200px] h-[200px]  md:w-[300px] md:h-[300px] rounded-full object-position-2 md:object-position object-cover "
                src="./img/homePhoto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.section>
      <h2 className=" text-center uppercase mt-10 mb-5 font-semibold text-[#04c2c9]">
        Comment From Supporter
      </h2>
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0f1922] editSection flex justify-center items-center pt-0 pb-20"
      >
        <div className="review bg-[#0b1218] py-5 px-3 rounded-lg">
          {comment && comment.length > 0 ? (
            comment.slice(0, numOfView).map((com) => (
              <div
                className="inner bg-[#060b10] py-4 rounded-lg px-3 mb-3 relative"
                key={com.id}
              >
                <div className="mb-3">
                  <Rate allowHalf allowClear disabled value={+com.rate} />
                </div>
                <div className="flex items-center gap-4">
                  <div className="imgInner ">
                    <div className="editImg w-12  h-12">
                      <div className="loadImg w-12  h-12  absolute bg-white rounded-full"></div>
                      <img
                        src={`${com.img}`}
                        className="w-12  h-12 rounded-full object-cover"
                        onError={(e) => {
                          e.target.remove();
                        }}
                        onLoad={(e) => {
                          e.target.parentElement
                            .querySelector(".loadImg")
                            .remove();
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-[#04c2c9] cursor-pointer">
                      {com.name}{" "}
                    </h2>
                    <p
                      className="text-white pEditControl w-[170px] md:w-[300px]  active"
                      id={`p${com.id}`}
                    >
                      {com.comment}
                    </p>
                    <form
                      action=""
                      id={`form${com.id}`}
                      className="formEditControl"
                      onSubmit={(e) => {
                        e.preventDefault();
                        updateDoc(doc(db, "users", com.id), {
                          ...com,
                          comment: e.target.querySelector("textarea").value,
                        }).then(
                          toast.success("Edit Done 🙏", {
                            theme: "dark",
                          })
                        );
                        document.getElementById(`h2${com.id}`).style.display =
                          "block";
                        if (
                          document
                            .getElementById(`form${com.id}`)
                            .classList.contains("active")
                        ) {
                          document
                            .getElementById(`form${com.id}`)
                            .classList.remove("active");
                          document
                            .getElementById(`p${com.id}`)
                            .classList.add("active");
                        }
                      }}
                    >
                      <textarea
                        rows="1"
                        required
                        defaultValue={com.comment}
                        type="text"
                        className="text-white min-h-4  w-[200px] resize-none bg-[#0b1218] px-3 py-2 outline-none rounded-3xl "
                      />
                      <div className=" flex items-center gap-3 mt-2">
                        <button
                          type="submit"
                          className="bg-[#ea4343] text-white px-2 py-1 rounded-full hover:bg-red-600 duration-700 "
                        >
                          Save
                        </button>
                        <div
                          className="bg-[white] cursor-pointer text-[#ea4343] px-2 py-1 rounded-full hover:bg-[#c7c7c7] duration-700 "
                          onClick={() => {
                            document.getElementById(
                              `h2${com.id}`
                            ).style.display = "block";
                            if (
                              document
                                .getElementById(`form${com.id}`)
                                .classList.contains("active")
                            ) {
                              document
                                .getElementById(`form${com.id}`)
                                .classList.remove("active");
                              document
                                .getElementById(`p${com.id}`)
                                .classList.add("active");
                            }
                          }}
                        >
                          Cancel
                        </div>
                      </div>
                    </form>
                    {com.email === loginInfo.email && (
                      <h2
                        id={`h2${com.id}`}
                        className="text-[#B0B3B8] z-20 text-2xl absolute right-[12px] w-8 h-8 hover:bg-[#0b1218] duration-500 flex items-center justify-center cursor-pointer rounded-full top-[16px]"
                        onClick={(e) => {
                          if (
                            document
                              .getElementById(com.id)
                              .classList.contains("active")
                          ) {
                            document
                              .getElementById(com.id)
                              .classList.remove("active");
                          } else {
                            document
                              .querySelectorAll(".enditEndRemoveControl")
                              .forEach((ele) => {
                                ele.classList.remove("active");
                              });
                            document
                              .getElementById(com.id)
                              .classList.add("active");
                          }
                        }}
                      >
                        <AiOutlineMore className="relative select-none w-8 h-8  z-0" />
                        <ul
                          id={com.id}
                          className="enditEndRemoveControl absolute right-0 top-[110%] text-[16px]  bg-[#0b1218] py-1 px-2 rounded-lg"
                        >
                          <li
                            className="px-2 hover:bg-[#060b10] rounded-lg mb-1  duration-500"
                            onClick={(e) => {
                              e.target.parentElement.parentElement.style.display =
                                "none";
                              if (
                                document
                                  .getElementById(`form${com.id}`)
                                  .classList.contains("active")
                              ) {
                                document
                                  .getElementById(`form${com.id}`)
                                  .classList.remove("active");
                                document
                                  .getElementById(`p${com.id}`)
                                  .classList.add("active");
                              } else {
                                document
                                  .getElementById(`form${com.id}`)
                                  .classList.add("active");
                                document
                                  .getElementById(`p${com.id}`)
                                  .classList.remove("active");
                              }
                            }}
                          >
                            Edit
                          </li>
                          <li
                            className="px-2 hover:bg-[#060b10] rounded-lg   duration-500"
                            onClick={() => {
                              deleteDoc(doc(db, "users", com.id))
                                .then(setNumOfView(numOfView - 1))
                                .then(
                                  toast.error("Removed Comment 😓", {
                                    theme: "dark",
                                  })
                                );
                            }}
                          >
                            Remove
                          </li>
                        </ul>
                      </h2>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="grid gap-4">
              <Loading />
              <Loading />
              <Loading />
            </div>
          )}
          {comment && comment.length > 3 && (
            <div className="flex items-center justify-between">
              {comment.length >= 3 && comment.length !== numOfView && (
                <button
                  onClick={() => {
                    if (numOfView < comment.length) {
                      if (comment.length - numOfView >= 3) {
                        setNumOfView(numOfView + 3);
                      } else {
                        setNumOfView(comment.length);
                      }
                    }
                  }}
                  className="text-[#B0B3B8] border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#B0B3B8] duration-500"
                >
                  View more comments
                </button>
              )}
              <p className="text-[#B0B3B8] ml-auto">
                {numOfView} of {comment.length}
              </p>
            </div>
          )}
          <div className="write px-3">
            <div className="text-center">
              <Rate
                allowHalf
                onChange={(e) => setRateInput(e)}
                className="block m-auto"
              />
            </div>
            <div className="textWrite flex items-center gap-2">
              <div className="imgWrite w-11 h-11 object-contain">
                <div className="editImg w-11  h-11">
                  <div className="loadImg w-11  h-11 absolute bg-white rounded-full"></div>
                  {loginInfo.img ? (
                    <img
                      src={loginInfo.img}
                      onError={(e) => {
                        e.target.remove();
                      }}
                      onLoad={(e) => {
                        if (e.target.parentElement.querySelector(".loadImg")) {
                          e.target.parentElement
                            .querySelector(".loadImg")
                            .remove();
                        }
                      }}
                      className="w-11  h-11 rounded-full  object-cover"
                      alt=""
                    />
                  ) : (
                    <img
                      onError={(e) => {
                        e.target.remove();
                      }}
                      onLoad={(e) => {
                        e.target.parentElement
                          .querySelector(".loadImg")
                          .remove();
                      }}
                      src="https://firebasestorage.googleapis.com/v0/b/protofolio-64812.appspot.com/o/New%20Project%20(2).png?alt=media&token=81b54aaf-6768-4cd9-ac63-52b6733a533b"
                      className="w-11  h-11 rounded-full  "
                      alt=""
                    />
                  )}
                </div>
              </div>
              <form
                action=""
                className="flex flex-wrap gap-2"
                onSubmit={sendComment}
              >
                <div className="flex relative items-center gap-2" ref={emo}>
                  {openOmj ? (
                    <div className="absolute bottom-[110%]  w-[170px] md:w-[300px] emojControl z-50  active">
                      <EmojiPicker
                        onEmojiClick={(e) => {
                          setCommentInput(commentInput + e.emoji);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="absolute bottom-[100%] emojControl"></div>
                  )}
                  <textarea
                    rows="1"
                    ref={textareaControl}
                    required
                    value={`${commentInput}`}
                    placeholder="write.."
                    onChange={(e) => {
                      e.target.style.height = "";
                      e.target.style.height = e.target.scrollHeight + "px";
                      setCommentInput(e.target.value);
                    }}
                    type="text"
                    id="textareaControl"
                    className="text-white  text-[14px] md:text-[16px] min-h-4 w-[120px] sm-[100px] md:w-[300px] resize-none bg-[#060b10] px-3 py-2 outline-none rounded-3xl "
                  />
                  {openOmj ? (
                    <BsEmojiSmile
                      className="self-end cursor-pointer text-[#ea4343] text-2xl"
                      onClick={() => {
                        setOpenOmj(!openOmj);
                      }}
                    />
                  ) : (
                    <BsEmojiSmile
                      onClick={() => {
                        setOpenOmj(!openOmj);
                      }}
                      className="text-white self-end cursor-pointer text-2xl"
                    />
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#ea4343] self-end text-white w-9 h-9 flex  justify-center items-center  rounded-full hover:bg-red-600 duration-700"
                >
                  <BsChatDots />
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
});

export default Home;
