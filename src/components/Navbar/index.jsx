import React, {useEffect, useState} from 'react'
import {Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import {Helmet} from 'react-helmet';

const Navs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageName, setPageName] = useState("Home")
  const [activeScreen, setActiveScreen] = useState({
    home: "foreground",
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
          resume: "foreground",
          projects: "foreground",
          contact: "foreground"
        }));
        break;
      case "/about":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          resume: "foreground",
          projects: "foreground",
          contact: "foreground"
        }));
        break;
      case "/resume":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          resume: "primary",
          projects: "foreground",
          contact: "foreground"
        }));
        break;
      case "/projects":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          resume: "foreground",
          projects: "primary",
          contact: "foreground"
        }));
        break;
      case "/contact":
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          resume: "foreground",
          projects: "foreground",
          contact: "primary"
        }));
        break;
      default:
        setActiveScreen(prevState => ({
          ...prevState,
          home: "foreground",
          resume: "foreground",
          projects: "foreground",
          contact: "foreground"
        }));
    }
  }, [path])


  return (
    <>
      <Helmet>
        <title>{pageName}</title>
      </Helmet>
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth='full' height="7rem" shouldHideOnScroll className='shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-white'>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-5 me-5" justify="end">
          <NavbarItem onClick={() => setPageName("HOME")}>
            <Link color={activeScreen.home} href="/">
              HOME
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
          <NavbarMenuItem>
            <Link color={activeScreen.home} className="w-full" href="/" size="lg">
              HOME
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color={activeScreen.resume} className="w-full" href="/" size="lg">
              RESUME
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color={activeScreen.projects} className="w-full" href="/" size="lg">
              PROJECTS
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color={activeScreen.contact} className="w-full" href="/" size="lg">
              CONTACT
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default Navs