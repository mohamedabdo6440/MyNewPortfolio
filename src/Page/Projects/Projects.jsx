import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { memo, useEffect, useRef } from 'react';
import { useState } from 'react';
import Project from '../../Component/Project/Project';
import { db } from '../../firebase/firebase';
import { AnimatePresence, motion } from "framer-motion"
import Loading from "../../Component/Loading/Loading"
import "./Projects.css"
import Pagenation from '../../Component/Pagenation/Pagenation';

const Projects = memo(() => {
    const [data, setData] = useState(false)
    const [fillter, setFillter] = useState(false)
    const [startPagenation, setStartPagenation] = useState(0)
    const [EndPagenation, setEndPagenation] = useState(9)
    const [numOfView] = useState(9)
    const homeCate = useRef()
    const user = () => {
        let sub = onSnapshot(query(collection(db, "Projects"), orderBy("timestamp", "asc")), (snapshot) => {
            let fetch = snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
            setData(fetch)
            setFillter(fetch)
        })
        return sub
    }
    useEffect(() => {
        user()
    }, [])

    const nextPage = (num, element) => {
        setStartPagenation(num * numOfView);
        setEndPagenation(num * numOfView + numOfView);window.scrollTo({
            top:homeCate.current.offsetTop,
            behavior: "instant"
          })
        element.target.parentElement.querySelectorAll(".btnPagenation").forEach(ele => {
            ele.classList.remove("active")
        })
        element.target.classList.add("active")
    }
    const fliterData = (e) => {
        setStartPagenation(0)
        setEndPagenation(9)
        setTimeout(() => {
            if (document.querySelectorAll(".btnPagenation").length > 1) {
                document.querySelectorAll(".btnPagenation").forEach(btn => {
                    btn.classList.remove("active")
                })
                document.querySelectorAll(".btnPagenation")[0].classList.add("active")
            }
        }, 50);
        e.target.parentElement.parentElement.querySelectorAll(".fliterData").forEach(ele => {
            ele.classList.remove("active")
        })
        e.target.classList.add("active")
        const users = () => {
            let sub = onSnapshot(query(collection(db, "Projects"), orderBy("timestamp", "asc")), (snapshot) => {
                let fetch = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                let newData = fetch.filter(ele => ele.type === e.target.innerText)
                if (e.target.innerText === "All Project") {
                    setData(fillter)
                } else {
                    setData(newData)
                }
            })
            return sub
        }
        users()
    }
    return (
        <motion.section
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className=' editSection   pb-20'>
            <motion.h2 initial={{opacity:0}} viewport={{once:true}} whileInView={{opacity:1 }} transition={{duration:.6,delay:.2}} className='pt-12 containerEdit font-bold text-center text-[#04c2c9] text-3xl'>Some Of My Projects</motion.h2>
            <div ref={homeCate} className="containerEdit overflow-y-hidden mt-5 flex flex-wrap justify-center gap-3 items-center">
                <motion.div  initial={{translateY:"100%"}} viewport={{once:true}} whileInView={{translateY:0 }}  transition={{duration:.4}} className="button-90">
                    <button onClick={fliterData} className='fliterData button-92 active'>All Project</button>
                </motion.div>
                <motion.div  initial={{translateY:"100%"}} viewport={{once:true}} whileInView={{translateY:0 }}  transition={{duration:.4,delay:.1}} className="button-90">
                    <button onClick={fliterData} className='fliterData button-92'>Html&Css</button>
                </motion.div>
                <motion.div  initial={{translateY:"100%"}} viewport={{once:true}} whileInView={{translateY:0 }}  transition={{duration:.4,delay:.2}} className="button-90">
                    <button onClick={fliterData} className='fliterData button-92'>Html&Css&Js</button>
                </motion.div>
                <motion.div  initial={{translateY:"100%"}} viewport={{once:true}} whileInView={{translateY:0 }}  transition={{duration:.4,delay:.3}} className="button-90">
                    <button onClick={fliterData} className='fliterData button-92'>React</button>
                </motion.div>
            </div>
            <div className="containerEdit   grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 text-center gap-10 pt-12  grid ">
                <AnimatePresence>
                    {!data ? <>
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                    </> : data.length > 1 ? data.slice(startPagenation, EndPagenation).map(ele =>
                        <Project key={ele.id} data={ele} />
                    ) : <h2 className='text-white text-3xl  errorHaddend'>Error Haddend</h2>}
                </AnimatePresence>
            </div>
            {data && <Pagenation nextPage={nextPage} data={data.length} />}
        </motion.section>
    );
});

export default Projects;