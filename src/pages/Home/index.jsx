import React from 'react'
import photos from '../../asset/ichsan.jpg'
import facebook from '../../asset/fb1.webp'
import linkedin from "../../asset/linked1.webp"
import insta from '../../asset/insta1.webp'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <main className='h-[1000px] sm:h-[800px] flex sm:flex-col justify-center sm:items-center'>
      <div className='absolute flex sm:flex-row flex-col'>
        <div class="flex flex-col items-center mt-6 sm:mt-0 px-10 py-10 sm:px-20 sm:py-12 bg-[#f7efd2] shadow-[-4px_4px_8px_0_rgba(0,0,0,0.2),-6px_6px_20px_0_rgba(0,0,0,0.19)]">
          <img className="sm:w-52 sm:h-52 w-44 h-44 rounded-full mb-4" src={photos} alt="Ichsan" />
          <div className="text-3xl font-bold mb-2 text-center mt-10"><h1>Ichsan</h1><h1>Ramadhan</h1></div>
          <div className='w-20 border-b-stone-700 border-4 my-5' />
          <div className="hidden sm:flex space-x-4 mb-4">
            <h3 className='text-xl'>FRONTEND DEVELOPER</h3>
          </div>
          <div className='flex gap-2 sm:hidden my-5'>
            <button type='button' className='rounded-full py-2 w-32 text-base text-white font-semibold bg-[#cd8b62]'>
              <Link to="/resume">RESUME</Link>
            </button>
            <button type='button' className='rounded-full py-2 w-32 text-base font-semibolds border-[#cd8b62] border bg-white'>
              <Link to="/project">PROJECT</Link>
            </button>
          </div>
          <div class="flex space-x-4 bottom-0">
            <Link to="https://www.facebook.com/ichsan.r.mokodompit/" target='_blank'>
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="https://www.linkedin.com/in/ichsanr" target='_blank'>
              <img src={linkedin} alt="linkedin" />
            </Link>
            <Link to="https://www.instagram.com/ichsanrm" target='_blank'>
              <img src={insta} alt="instagram" />
            </Link>
          </div>
        </div>
        <div className="py-10 sm:py-12 px-8 sm:px-12">
          <h1 className='font-bold sm:text-8xl text-6xl'>Hello</h1>
          <br />
          <br />
          <h3 className='font-bold sm:text-3xl text-xl'>I'm Ichsan & here's what I do</h3>
          <br />
          <br />
          <div className='sm:flex gap-6 hidden mb-6'>
            <button type='button' className='rounded-full py-2 w-32 text-base text-white font-semibold sm:hover:bg-white sm:hover:text-black sm:hover:border-[#cd8b62] sm:hover:border sm:bg-[#cd8b62] sm:transition sm:ease-in-out sm:delay-150 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300'>
              <Link to="/resume">RESUME</Link>
            </button>
            <button type='button' className='rounded-full py-2 w-32 text-base font-semibold sm:hover:bg-[#cd8b62] sm:hover:text-white sm:border-[#cd8b62] sm:border sm:bg-white sm:transition sm:ease-in-out sm:delay-150 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300'>
              <Link to="/project">PROJECT</Link>
            </button>
          </div>
          <div className='sm:w-[25rem]'>
            <p className='text-base sm:text-lg'>Currently working as Frontend Developer at Bank Rakyat Indonesia</p>
            <br />
            <p className='text-base sm:text-lg'> Possess the necessary skills as a Frontend Developer, including HTML5, CSS3, Javascript, Typescript, Bootstrap, Tailwind CSS, React JS, React Native, Next JS, Node JS, and Express JS.</p>
          </div>
        </div>
      </div>
      <div className='sm:flex sm:flex-row-reverse w-full h-full'>
        <div className='w-full sm:h-full sm:w-[60%] bg-white sm:pr-11 pr-6 h-40'></div>
        <div className='sm:pl-11 pl-6'></div>
      </div>
    </main>
  )
}

export default Home