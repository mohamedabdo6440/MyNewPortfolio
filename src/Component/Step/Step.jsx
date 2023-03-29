import React, { memo, useState } from 'react';
import { BsPlus } from "react-icons/bs"
import { BiMinus } from "react-icons/bi"
import "./Step.css"
import { useRef } from 'react';
import { useEffect } from 'react';
import { db } from "../../firebase/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { motion } from 'framer-motion';
const Step = memo(({ data }) => {
    const [open, setOpen] = useState(false)
    const [dataStep, setDataStep] = useState(false)
    const skill = useRef()
    const opend = useRef()
    const step = () => {
        let sub = onSnapshot(query(collection(db, data)), (snapshot) => {
            let fetch = snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
            setDataStep(fetch)
        })
        return sub
    }
    useEffect(() => {
        if (data) {
            step()
        }
        window.addEventListener("resize", () => {
            if (opend.current) {
                if (!open) {
                    opend.current.style.marginBottom = `0px`
                } else {
                    opend.current.style.marginBottom = `${skill.current.offsetHeight + 25}px`
                    skill.current.style.width = `${opend.current.offsetWidth}px`
                }
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data,open])
    return (
        <motion.div  initial={{opacity:0,scale:0}} viewport={{once:true}} whileInView={{opacity:1,scale:1 }}   transition={{ duration: .6,delay:.2 }} className='review px-3 select-none pt-4 rounded-lg containerEdit relative '>
            <div ref={opend} onClick={(e) => {
                if (open) {
                    opend.current.style.marginBottom = `0px`
                    skill.current.style.width = `${opend.current.offsetWidth}px`
                } else {
                    skill.current.style.width = `${opend.current.offsetWidth}px`
                    opend.current.style.marginBottom = `${skill.current.offsetHeight + 25}px`
                }
                setOpen(!open)
            }
            } className={` ${open && ` active`} stepOpen w-[80%] mx-auto py-4 px-5 rounded-md text-white flex justify-between items-center`}>
                <h2 className='text-xl'><span>{dataStep && dataStep[0].step}</span></h2>
                <h2 className='text-xl cursor-pointer' > {open ? <BiMinus /> : <BsPlus />}</h2>
            </div>
            <div ref={skill} className={`bg-[#0b1218] ${open && ` active`} gap-3 flex-wrap flex-col-reverse md:flex-row  skill  mx-auto py-4 px-5 rounded-md text-white flex justify-between items-center my-5`}>
                <div className="reee w-[100%] md:w-[70%] gap-3 flex flex-wrap justify-center md:justify-start ">
                    {dataStep && dataStep[0].skills.map(span =>
                        (<span key={Math.random()} className='w-fit flex justify-center items-center text-center  bg-[#2c3599] px-4 py-2 rounded-3xl'>{span}</span>)
                    )}
                </div>
                <div className="w-[100%] md:w-[25%] ">
                    {dataStep &&
                    <img className='w-[50%] md:w-full m-auto md:m-0' src={dataStep[0].img} alt="" />
                    }
                    
                </div>
            </div>
        </motion.div>
    );
});
export default Step;