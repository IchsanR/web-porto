import React, {useEffect, useState} from 'react'
import {Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";

const Navs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState({
    home: "foreground",
    about: "foreground",
    resume: "foreground",
    projects: "foreground",
    contact: "foreground"
  })

  const path = window.location.pathname

  useEffect(() => {
    switch (path) {
      case "/":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "primary",
          about: "foreground",
          resume: "foreground",
          projects: "foreground",
          contact: "foreground"
        }));
        break;
      case "/about":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          about: "primary",
          resume: "foreground",
          projects: "foreground",
          contact: "foreground"
        }));
        break;
      case "/resume":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          about: "foreground",
          resume: "primary",
          projects: "foreground",
          contact: "foreground"
        }));
        break;
      case "/projects":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          about: "foreground",
          resume: "foreground",
          projects: "primary",
          contact: "foreground"
        }));
        break;
      case "/contact":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          about: "foreground",
          resume: "foreground",
          projects: "foreground",
          contact: "primary"
        }));
        break;
      default:
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          about: "foreground",
          resume: "foreground",
          projects: "foreground",
          contact: "foreground"
        }));
    }
  }, [path])

  const menuItems = [
    "HOME",
    "ABOUT ME",
    "RESUME",
    "PROJECTS",
    "CONTACT"
  ];
  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth='full' height="7rem" className='shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-white'>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-5 me-5" justify="end">
          <NavbarItem>
            <Link color={activeScreen.home} href="/">
              HOME
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" color={activeScreen.about}>
              ABOUT ME
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color={activeScreen.resume} href="#">
              RESUME
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color={activeScreen.projects} href="#">
              PROJECTS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color={activeScreen.contact} href="#">
              CONTACT
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default Navs