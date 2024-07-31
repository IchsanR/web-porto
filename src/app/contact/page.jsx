"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
import {motion} from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 851 6179 1231"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ichsanramadhan.work@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jakarta, Indonesia"
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Contact me if you want me to collaborate in your projects!
              </p>
              <div className="flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-6"
                      >
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-primary text-accent rounded-md flex items-center justify-center ">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60">{item.title}</p>
                          <h3 className="text-xl">{item.description}</h3>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact