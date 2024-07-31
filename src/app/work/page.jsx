"use client"

import React, {useState} from "react"
import 'swiper/css'
import {motion} from "framer-motion"
import {Swiper, SwiperSlide} from 'swiper/react';
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import Link from "next/link"
import Image from "next/image"
import WorkSliderButton from "@/components/WorkSliderButton";


const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "mamarecipe",
    description: "Mama recipe is the web application that you can post your delicious recipe.",
    stack: [
      {name: "react js"},
      {name: "tailwind css"},
      {name: "express js"}
    ],
    image: "/assets/work/thumb1.png",
    live: "https://mamarecipe-frontend.vercel.app/",
    github: "https://github.com/IchsanR/mamarecipe-frontend"
  },
  {
    num: "02",
    category: "fullstack",
    title: "telegram chat",
    description: "Telegram is a realtime chat application.",
    stack: [
      {name: "react js"},
      {name: "bootstrap"},
      {name: "express js"},
      {name: "socket.io"}
    ],
    image: "/assets/work/thumb2.png",
    live: "https://github.com/IchsanR/telegram-frontend",
    github: "https://github.com/IchsanR/telegram-frontend"
  },
  {
    num: "03",
    category: "fullstack",
    title: 'peworld',
    description: "Peworld is a web application where job seekers and recruiters meet.",
    stack: [
      {name: "next js"},
      {name: "tailwind css"},
      {name: "express js"}
    ],
    image: "/assets/work/thumb3.png",
    live: "https://github.com/IchsanR/peworld-frontend",
    github: "https://github.com/IchsanR/peworld-frontend"
  },
  {
    num: "04",
    category: "fullstack",
    title: 'ankasa',
    description: "Ankasa Ticketing is an application that allows users to find and order airline tickets.",
    stack: [
      {name: "react js"},
      {name: "botstrap"},
      {name: "express js"}
    ],
    image: "/assets/work/thumb4.png",
    live: "https://github.com/IchsanR/AnkasaAPP",
    github: "https://github.com/IchsanR/AnkasaAPP"
  },
  {
    num: "05",
    category: "fullstack",
    title: "blanja app",
    description: "Blanja is an e-commerce application where customers can find any products that is being posted by sellers and then make an order.",
    stack: [
      {name: "react js"},
      {name: "tailwind css"},
      {name: "express js"}
    ],
    image: "/assets/work/thumb5.png",
    live: "https://github.com/IchsanR/BlanjaApp",
    github: "https://github.com/IchsanR/BlanjaApp"
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text text-8xl leading-none font-extrabold">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* project title */}
              <p className="text-white/60 ">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20" />
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* images */}
                      <div className="relative w-full h-full">
                        <Image src={item.image} fill className="object-cover" alt={item.title} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work