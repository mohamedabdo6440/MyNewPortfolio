import React, { memo } from "react";
import { SiGmail } from "react-icons/si";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const SocialLinks = memo(() => {
  return (
    <div>
      <ul className=" items-center gap-5 flex flex-wrap">
        <a
          href="https://www.facebook.com/MohameAsr/"
          target="_blank"
          rel="noreferrer"
          className="capitalize relative text-[20px] group w-9 h-9 hover:translate-y-[12px] hover:scale-[0.8] flex items-center justify-center  hover:rotate-[-35deg] hover:skew-x-[20deg]  rounded-md hover:skew-y-[20deg] text-white  cursor-pointer duration-500  "
        >
          <div className="bg-blue-800 absolute group-hover:translate-y-[-25px] duration-500 group-hover:translate-x-[25px] inset-0 z-[1] flex items-center justify-center rounded-md ">
            <FaFacebookF />
          </div>
          <span className="absolute inset-0 bg-blue-800 opacity-80 group-hover:translate-y-[-17px] group-hover:translate-x-[17px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-blue-800 opacity-60 group-hover:translate-y-[-10px] group-hover:translate-x-[10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-blue-800 opacity-40 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-blue-800 opacity-30 group-hover:translate-x-[10px] group-hover:translate-y-[-10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-blue-800 opacity-20 group-hover:translate-x-[25px] group-hover:translate-y-[-25px] duration-500 rounded-md"></span>
        </a>
        <a
          href="https://github.com/mohamedabdo6440/"
          target="_blank"
          rel="noreferrer"
          className="capitalize relative text-[20px] group w-9 h-9 hover:translate-y-[12px] hover:scale-[0.8] flex items-center justify-center  hover:rotate-[-35deg] hover:skew-x-[20deg]  rounded-md hover:skew-y-[20deg] text-white  cursor-pointer duration-500  "
        >
          <div className="bg-black absolute group-hover:translate-y-[-25px] duration-500 group-hover:translate-x-[25px] inset-0 z-[1] flex items-center justify-center rounded-md ">
            <FiGithub />
          </div>
          <span className="absolute inset-0 bg-black opacity-80 group-hover:translate-y-[-17px] group-hover:translate-x-[17px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-black opacity-60 group-hover:translate-y-[-10px] group-hover:translate-x-[10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-black opacity-40 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-black opacity-30 group-hover:translate-x-[10px] group-hover:translate-y-[-10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-black opacity-20 group-hover:translate-x-[25px] group-hover:translate-y-[-25px] duration-500 rounded-md"></span>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noreferrer"
          className="capitalize relative text-[20px] group w-9 h-9 hover:translate-y-[12px] hover:scale-[0.8] flex items-center justify-center  hover:rotate-[-35deg] hover:skew-x-[20deg]  rounded-md hover:skew-y-[20deg] text-white  cursor-pointer duration-500  "
        >
          <div className="bg-orange-500 absolute group-hover:translate-y-[-25px] duration-500 group-hover:translate-x-[25px] inset-0 z-[1] flex items-center justify-center rounded-md ">
            <SiGmail />
          </div>
          <span className="absolute inset-0 bg-orange-500 opacity-80 group-hover:translate-y-[-17px] group-hover:translate-x-[17px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-orange-500 opacity-60 group-hover:translate-y-[-10px] group-hover:translate-x-[10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-orange-500 opacity-40 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-orange-500 opacity-30 group-hover:translate-x-[10px] group-hover:translate-y-[-10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-orange-500 opacity-20 group-hover:translate-x-[25px] group-hover:translate-y-[-25px] duration-500 rounded-md"></span>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=01063470569&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="capitalize relative text-[20px] group w-9 h-9 hover:translate-y-[12px] hover:scale-[0.8] flex items-center justify-center  hover:rotate-[-35deg] hover:skew-x-[20deg]  rounded-md hover:skew-y-[20deg] text-white  cursor-pointer duration-500  "
        >
          <div className="bg-green-700 absolute group-hover:translate-y-[-25px] duration-500 group-hover:translate-x-[25px] inset-0 z-[1] flex items-center justify-center rounded-md ">
            <AiOutlineWhatsApp />
          </div>
          <span className="absolute inset-0 bg-green-700 opacity-80 group-hover:translate-y-[-17px] group-hover:translate-x-[17px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-green-700 opacity-60 group-hover:translate-y-[-10px] group-hover:translate-x-[10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-green-700 opacity-40 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-green-700 opacity-30 group-hover:translate-x-[10px] group-hover:translate-y-[-10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-green-700 opacity-20 group-hover:translate-x-[25px] group-hover:translate-y-[-25px] duration-500 rounded-md"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-abdo-13a527211/"
          target="_blank"
          rel="noreferrer"
          className="capitalize relative text-[20px] group w-9 h-9 hover:translate-y-[12px] hover:scale-[0.8] flex items-center justify-center  hover:rotate-[-35deg] hover:skew-x-[20deg]  rounded-md hover:skew-y-[20deg] text-white  cursor-pointer duration-500  "
        >
          <div className="bg-white text-blue-700 absolute group-hover:translate-y-[-25px] duration-500 group-hover:translate-x-[25px] inset-0 z-[1] flex items-center justify-center rounded-md ">
            <FaLinkedinIn />
          </div>
          <span className="absolute inset-0 bg-white text-blue-700 opacity-80 group-hover:translate-y-[-17px] group-hover:translate-x-[17px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-white text-blue-700 opacity-60 group-hover:translate-y-[-10px] group-hover:translate-x-[10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-white text-blue-700 opacity-40 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-white text-blue-700 opacity-30 group-hover:translate-x-[10px] group-hover:translate-y-[-10px] duration-500 rounded-md"></span>
          <span className="absolute inset-0 bg-white text-blue-700 opacity-20 group-hover:translate-x-[25px] group-hover:translate-y-[-25px] duration-500 rounded-md"></span>
        </a>
      </ul>
    </div>
  );
});

export default SocialLinks;
