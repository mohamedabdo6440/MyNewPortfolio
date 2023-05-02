import React, { memo, useRef } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import "./Contact.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Contact = memo(() => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hbxm2r2",
        "template_xjexhxs",
        form.current,
        "NEhT0PRvuR1rFE0AA"
      )
      .then(
        (result) => {
          toast.success("Send Message done", {
            theme: "dark",
          });
          form.current.subject.value = "";
          form.current.name.value = "";
          form.current.email.value = "";
          form.current.message.value = "";
          form.current.feedBack.value = "";
        },
        (error) => {
          toast.error(error.text, {
            theme: "dark",
          });
        }
      );
  };
  useEffect(() => {
    document.title = "Mohamed Abdo | Contact";
  }, []);
  return (
    <motion.section
      layout
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "backInOut" }}
      exit={{ opacity: 1 }}
      className="bg-[#0f1922] editSection flex justify-center items-center pb-4"
    >
      <div className="review bg-[#0b1218] py-5 px-3 rounded-lg containerEdit pt-6 md:pt-8">
        <form className="contact " onSubmit={sendEmail} ref={form}>
          <div className="relative flex mb-3">
            <input
              name="subject"
              onBlur={(e) => {
                e.target.parentElement.querySelector("svg").style.color =
                  "#fff";
              }}
              onFocus={(e) => {
                e.target.parentElement.querySelector("svg").style.color =
                  "#ea4343";
              }}
              type="text"
              placeholder="Subject"
              className="text-white placeholder:text-[14px] w-full text-[14px] md:text-[16px] bg-[#060b10] pl-10 pr-4  py-3 outline-none rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full relative">
              <input
                type="text"
                name="name"
                onBlur={(e) => {
                  e.target.parentElement.querySelector("svg").style.color =
                    "#fff";
                }}
                onFocus={(e) => {
                  e.target.parentElement.querySelector("svg").style.color =
                    "#ea4343";
                }}
                placeholder="Your Name"
                required
                className="w-full text-white placeholder:text-[14px] text-[14px] md:text-[16px] bg-[#060b10] pl-10 pr-4 py-3 outline-none rounded-lg"
              />
              <IoPersonOutline className="text-2xl text-white absolute top-1/2 -translate-y-1/2 left-[10px]" />
            </div>
            <div className="w-full relative">
              <input
                required
                name="email"
                onBlur={(e) => {
                  e.target.parentElement.querySelector("svg").style.color =
                    "#fff";
                }}
                onFocus={(e) => {
                  e.target.parentElement.querySelector("svg").style.color =
                    "#ea4343";
                }}
                type="email"
                placeholder="Your E-mail To Respond To Your Contact"
                className="w-full placeholder:text-[14px] text-white text-[14px] md:text-[16px] bg-[#060b10] pl-10 pr-4  py-3 outline-none rounded-lg"
              />
              <AiOutlineMail className="text-2xl text-white absolute top-1/2 -translate-y-1/2 left-[10px]" />
            </div>
          </div>
          <div className="grid gap-3 mt-3 ">
            <div className="relative flex">
              <BiMessage className="text-2xl text-white absolute top-[12px] left-[10px]" />
              <textarea
                required
                name="message"
                onBlur={(e) => {
                  e.target.parentElement.querySelector("svg").style.color =
                    "#fff";
                }}
                onFocus={(e) => {
                  e.target.parentElement.querySelector("svg").style.color =
                    "#ea4343";
                }}
                placeholder="Your Message"
                rows={8}
                className="text-white placeholder:text-[14px] w-full resize-none text-[14px] md:text-[16px] bg-[#060b10] pl-10 pr-4  py-3 outline-none rounded-lg "
              />
            </div>
            <div className="relative flex">
              <VscFeedback className="text-2xl text-white absolute top-1/2 -translate-y-1/2 left-[10px]" />
              <input
                name="feedBack"
                onBlur={(e) => {
                  e.target.parentElement.querySelector("svg").style.color =
                    "#fff";
                }}
                onFocus={(e) => {
                  e.target.parentElement.querySelector("svg").style.color =
                    "#ea4343";
                }}
                type="text"
                placeholder="Your FeedBack"
                className="text-white placeholder:text-[14px] w-full text-[14px] md:text-[16px] bg-[#060b10] pl-10 pr-4  py-3 outline-none rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4 relative">
            <button type="submit" className="glow-on-hover">
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
});

export default Contact;
