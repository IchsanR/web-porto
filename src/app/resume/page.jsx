"use client"

import {FaJs, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs, SiExpress, SiTypescript, SiRedis} from 'react-icons/si'
import {motion} from 'framer-motion'

// component
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import {ScrollArea} from '@/components/ui/scroll-area'


const about = {
  title: "About me",
  description: "Currently working as Frontend Developer at Bank Rakyat Indonesia. Possess the necessary skills as a Software Developer. Capable of working effectively and efficiently both in a team and individually. Enthusiastic about learning new things to enhance existing skills",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ichsan Ramadhan"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 851 6179 1231"
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years"
    },
    {
      fieldName: "Email",
      fieldValue: "ichsanramadhan.work@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia"
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "Here's my working exprerience",
  items: [
    {
      company: "Bank Rakyat Indonesia",
      position: "Software Engineer - Frontend",
      duration: "August 2023 - Present",
    },
    {
      company: "Bank Rakyat Indonesia",
      position: "Software Developer Intern",
      duration: "May 2023 - August 2023",
    },
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Here's my education background",
  items: [
    {
      institution: "Pijar Camp",
      degree: "Full Stack Javascript Bootcamp",
      duration: "2022"
    },
    {
      institution: "Universitas Sam Ratulangi",
      degree: "Bachelor's of Economics",
      duration: "2015 - 2021"
    },
  ]
}

const skills = {
  title: "My skills",
  description: "Here's the tech stacks that I mastered",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <SiTypescript />,
      name: "typescript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <SiExpress />,
      name: "express.js"
    },
    {
      icon: <SiRedis />,
      name: "redis"
    },
  ]
}


const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Exprerience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600p] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] lg:mb-4'>
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume