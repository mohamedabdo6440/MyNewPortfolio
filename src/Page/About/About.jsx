import React, { memo, useEffect } from "react";
import Step from "../../Component/Step/Step";
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
        <div className="text-white py-3  mb-4">
          <motion.p
            initial={{ translateY: "200%" }}
            viewport={{ once: true }}
            whileInView={{ translateY: "0% " }}
            transition={{ duration: 0.4 }}
            className="mb-1"
          >
            - I worked on restructuring some of the codes in several projects,
            which helped reduce memory consumption by 25 % to 30 % of the space used in applications.
            The total lines of code that I have written so far have exceeded thousands of lines keeping in mind the solid principles.<br />
            -I always look forward to the best and look for more experiences with a company and a team that has a high level of efficiency.I always want to be trusted and appreciated in the company I work for.<br />
            -i always adapt to the work environment, and if there is any question, I do not hesitate to ask it.<br />
            -I worked on many different projects, which made me aware of some experiences that help contribute to an effective role between a highly qualified work team and participate in producing a highly efficient product that serves the company and the customer.<br />

          </motion.p>

        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#04c2c9] text-xl"
        >
          Technical Skills & competencies
        </motion.h2>
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
