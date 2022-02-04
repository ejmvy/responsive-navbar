import { Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import icons from './NavIcons';
import TopBar from "./Topbar";

const Navbar = () => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
     { windowWidth > 500 && <Flex><SideBar icons={icons} /> </Flex> } 
     { windowWidth <= 500 && <TopBar icons={icons} /> }
    </>

  )
}

export default Navbar;