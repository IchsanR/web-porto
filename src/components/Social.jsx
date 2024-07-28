import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaInstagram, FaFacebook} from 'react-icons/fa'

const socials = [
  {icon: <FaGithub />, path: 'https://github.com/IchsanR'},
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/ichsanr'},
  {icon: <FaInstagram />, path: 'https://www.instagram.com/ichsanrm/'},
  {icon: <FaFacebook />, path: 'https://facebook.com/ichsan.r.mokodompit/'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social