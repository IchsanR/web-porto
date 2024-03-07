import React from 'react'
import facebook from '../../asset/facebook.webp'
import linkedin from "../../asset/linkedin.webp"
import insta from '../../asset/insta.webp'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='h-[7rem] flex flex-wrap sm:px-11 px-6 bg-white gap-10'>
      <div className='my-auto grow text-xs'>
        <p><span>&copy;</span> by Ichsan Ramadhan.</p>
      </div>
      <div className='my-auto grow-0 sm:text-center text-xs'>
        <p className='font-bold'>Follow Me</p>
        <div className='flex gap-4'>
          <Link to="https://www.facebook.com/ichsan.r.mokodompit/">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link to="https://www.linkedin.com/in/ichsanr">
            <img src={linkedin} alt="linkedin" />
          </Link>
          <Link to="https://www.instagram.com/ichsanrm">
            <img src={insta} alt="instagram" />
          </Link>
        </div>
      </div>
      <div className='my-auto grow-0 sm:text-center text-xs'>
        <p className='font-bold'>Get In Touch</p>
        <p>ichsanramadhan.work@gmail.com</p>
      </div>
    </footer>
  )
}

export default Footer