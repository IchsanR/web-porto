import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaInstagram, FaFacebook} from 'react-icons/fa'

const socials = [
  {icon: <FaGithub />, path: ''},
  {icon: <FaLinkedinIn />, path: ''},
  {icon: <FaInstagram />, path: ''},
  {icon: <FaFacebook />, path: ''},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.icon} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social