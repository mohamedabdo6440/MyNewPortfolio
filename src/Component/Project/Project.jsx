import React, { memo } from 'react';
import "./Project.css"
import { motion } from "framer-motion"
import { CiYoutube } from "react-icons/ci"
import { IoIosClose } from "react-icons/io"
import { useState } from 'react';
import ReactPlayer from 'react-player';

const Project = memo(({ data }) => {
    const [openVideo, setOpenVideo] = useState(false)
    return (
        <motion.div className='Project'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout

        >
            {data && <motion.div

                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .4 }} className=''>
                <h2 className='text-white center text-xl mb-4 '>{data.title}</h2>
                <div className="imgHover relative overflow-hidden">
                    {data.youtube && <h2 onClick={() => {
                        if (data.youtube) {
                            setOpenVideo(true);
                        }
                    }} className='absolute z-30 bg-red-700 hover:bg-white hover:text-red-700 duration-300 animate-pulse text-2xl text-white px-4 py-1 left-0 top-0'><CiYoutube /></h2>}
                    {data.extanstion &&
                        <h2 className='absolute z-30 bg-[#04c2be]   text-white px-2 py-1 right-0 top-0'>{data.extanstion}</h2>}
                    <span className='relative  flex overflow-hidden'>
                        <img className='w-full  h-full' src={data.image} onLoad={(e) => {
                            e.target.parentElement.querySelector(".loadCon").remove()
                            e.target.parentElement.querySelector(".loadConimg").remove()
                        }
                        }
                            onError={(e) => { e.target.remove() }}
                            alt="" />
                        <img src="./img/40-BEST-WEBSITE-DESIGNS-2022.png" className='opacity-0 loadConimg' alt="" />
                        <div className="loadCon  absolute top-0 left-0 w-full h-full bg-[#0b1218]">
                            <div className="">
                                <div className="item item-1"></div>
                                <div className="item item-2"></div>
                                <div className="item item-3"></div>
                                <div className="item item-4"></div>
                            </div>
                        </div>
                    </span>
                    <div className="z-20 absolute flex items-center justify-center px-2 pb-7  productHover ">
                        <div className="pt-4">
                            <h2 className=' text-[#ea4343] mb-2 font-bold'>With</h2>
                            <div className="flex flex-wrap gap-2 justify-center text-white">
                                {data.tools.map((tool) => {
                                    return tool + " ' ";
                                })}
                            </div>
                        </div>
                    </div>
                    <div className=" z-20 absolute productHover flex items-end justify-center pb-2 ">
                        <div className="flex gap-3 justify-center button-90">
                            {/* <a target="_blank" className='button-92' href={data.github} rel="noreferrer">Github</a> */}
                            <a target="_blank" className='button-92' href={data.demoLink} rel="noreferrer">Visit Demo</a>
                        </div>
                    </div>
                </div>
            </motion.div>}
            {data && data.youtube &&
                <div
                    className={`${!openVideo ? `opacity-0 || invisible ` : ` opacity-1 || visible`} transition-visibility || bg-black/90 pt-32 || absolute || inset-0 || z-[99999999]`}>
                    <div className="sticky top-[50%] left-0 right-0 -translate-y-1/2">
                        <div className="w-[90%] md:w-[70%] bg-black p-3.5 mx-auto text-[#f9f9f9] flex justify-between items-center">
                            <h2>Play Video</h2>
                            <div onClick={() => {
                                setOpenVideo(false)
                            }} className="hover:bg-[#0f0f0f] || transition-colors || duration-500 || h-6 || w-6 || flex 
                        || items-center || justify-center || rounded-full">
                                <div className="h-5 || cursor-pointer ">
                                    <IoIosClose />
                                </div>
                            </div>
                        </div>
                        <div className="pt-5 mx-auto  bg-black w-[90%] md:w-[70%]">
                            <div className="w-[100%] flex justify-center items-center relative mx-auto min-h-[200px] md:min-h-[350px]  bg-black">
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${data.youtube}`} width={'100%'} height={"100%"}
                                    className="absolute inset-0"
                                    controls={true}
                                    playing={openVideo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </motion.div>
    );
});

export default Project;