import React, { memo, useEffect } from "react";
import Step from "../../Component/Step/Step";
import { BiCodeAlt } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { motion } from "framer-motion";

const About = memo(() => {
  useEffect(() => {
    document.title = "Mohamed Abdo | About";
  }, []);
  return (
    <motion.section
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "backInOut" }}
      exit={{ opacity: 1 }}
      className=" editSection  pb-20"
    >
      <div className="containerEdit text-center pt-12">
        <motion.h2
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#04c2c9] text-xl"
        >
          About Me
        </motion.h2>
        <div className="text-white py-3  overflow-y-hidden mb-4">
          <motion.p
            initial={{ translateY: "200%" }}
            viewport={{ once: true }}
            whileInView={{ translateY: "0% " }}
            transition={{ duration: 0.4 }}
            className="mb-1"
          >
            I have 2+ years of work experiance
          </motion.p>
          <motion.p
            initial={{ translateY: "150%" }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 0.4 }}
          >
            In my journey to be a developer I have three steps{" "}
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#04c2c9] text-xl"
        >
          Interests
        </motion.h2>
        <div className="text-white py-3 overflow-y-hidden mb-4">
          <motion.p
            initial={{ translateY: "200%" }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-1 items-center gap-2"
          >
            <BiCodeAlt className=" text-xl" /> Coding
          </motion.p>
          <motion.p
            initial={{ translateY: "150%" }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center items-center gap-2"
          >
            <BsBook className=" text-xl" /> Learning
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#04c2c9] text-xl"
        >
          Tools
        </motion.h2>
        <div className="text-white py-3 overflow-y-hidden  mb-4">
          <motion.p
            initial={{ translateY: "100%" }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 0.4 }}
          >
            The steps I have passed to complete my journey
          </motion.p>
        </div>
      </div>
      <div className="py-3 overflow-x-hidden">
        <Step data={"step1"} />
        <Step data={"step2"} />
        <Step data={"step3"} />
      </div>
    </motion.section>
  );
});

export default About;
