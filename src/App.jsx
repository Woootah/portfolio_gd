import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import  projects  from "../projects";
import Modal from './components/Modal';


function App() {
    const date = new Date().getFullYear();
    const [isClicked, setIsClicked] = useState(false);
    const [displayImage, setDisplayImage] = useState({});

    const handleClick = (id) => {
        const image = projects.filter(e => e.id == id)[0];
        setDisplayImage(image);
        setIsClicked(true);
        document.body.classList.add('overflow-hidden');
    }

    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

  return (
    <div className="wrapper w-screen bg-cwhite text-cblue cscrollbar">
        {/* SECTION 1 */}
        <div id="s1" className="wrapper grid grid-cols-3 w-full h-screen">
            <div className="w-full py-4 px-6 flex flex-col justify-between col-span-3 md:col-span-1">
                <div className='font-font1 text-3xl md:text-5xl flex flex-col leading-6'><span>walter</span><span>gagate</span></div>
                <p className='leading-4 md:leading-6 text-sm md:text-xl pr-8 mt-4'>Freelance graphic designer with a passion for creating visually compelling designs that communicate ideas and captivate audiences.</p>
                <div className="contact flex space-x-4 mt-4">
                    <a href='mailto:waltergagate1001@gmail.com'><i className="text-2xl fa-solid fa-envelope"></i></a>
                    <a href='https://www.linkedin.com/in/walter-gagate-9459ab26a/'><i className="text-2xl fa-brands fa-linkedin"></i></a>
                </div>
            </div>

            <div className="s2 w-full flex items-end col-span-3 md:col-span-1 px-4">
                <div className="img-container w-full h-[700px] overflow-hidden">
                    <img src="images/uruta_edited.png" alt="uruta" className='w-full h-full object-cover'/>
                </div>
            </div>

            <div className="s3 w-full flex  md:items-end py-4 px-6 flex-col items-center md:justify-between col-span-3 md:col-span-1">
                <div className='text-sm mt-4 md:mt-0 md:text-lg flex justify-center items-center leading-tight -space-x-6 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <a href='https://www.linkedin.com/in/walter-gagate-9459ab26a/' className='pl-8 underline hover:italic'>Let&#39;s work together to bring your ideas to life!</a>
                </div>
                <div className='font-font1 text-xl md:text-5xl md:flex flex-col text-right leading-7 hidden'><span>graphic</span><span>designer</span></div>
                <div className='hidden md:block'>
                    <p className='font-bold'>&copy; { date } ウォルター</p>
                </div>
            </div>
        </div>

        {/* SECTION 2 */}
        <div id="s2" className='px-6 py-[5%] mt-20 md:mt-0'>
            <div className="title mb-6 space-x-2">
                <span className='px-4 py-1 border border-cblue rounded-full'>walter&#39;s</span>
                <span className='px-4 py-1 bg-cblue text-cwhite rounded-full'>works</span>
            </div>
            <div className="project-wrapper columns-2 md:columns-4 lg:columns-5 gap-4">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className='mb-4'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        variants={fadeInVariant}
                    >
                    <img src={`images/portfolio/${project.image}`} alt={project.name} className='w-[400px] object-cover' onClick={() => handleClick(project.id)}/>
                    </motion.div>
                ))}
            </div>
            <div className='flex items-center justify-center mt-12'>
                <p className='text-xs md:text-sm font-bold'>More Coming Soon . . .</p>
            </div>
        </div>

        {/* FOOTER */}
        <div className='py-[4%] flex justify-center flex-col items-center bg-cblue text-cwhite'>
            <div className='font-font1 text-lg md:text-xl flex flex-col leading-tight mt-4'>walter gagate</div>
            <div className='text-xs md:text-sm flex flex-col leading-tight border border-cwhite px-4 py-1 rounded-full mt-2'>Let's work together</div>

            <div className="footer-links flex space-x-5 items-center justify-center mt-8">
                <p className='text-sm'>&copy; { date } ウォルター</p>
                <p>•</p>
                <div className="contact flex space-x-4 text-lg md:text-xl">
                    <a href='mailto:waltergagate1001@gmail.com'><i className="fa-solid fa-envelope"></i></a>
                    <a href='https://www.linkedin.com/in/walter-gagate-9459ab26a/'><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>

        {isClicked && <Modal image={displayImage} setIsClicked={setIsClicked}/>}
    </div>


  )
}

export default App
