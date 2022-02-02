import { Flex, Image } from "@chakra-ui/react"
import { useState } from "react";
import NavItem from "./NavItem";

const TopBar = ({ icons }: any) => {
  const navSize = 'small';

  const [ iconArray, setIconArray ] = useState(icons);

  console.log('icon', icons);

  const navClicked = (iconName:any) => {
    const iconsUpdated = iconArray.map((icon: any) => icon.title === iconName ? {
      ...icon,
      active: true
    } : {
      ...icon,
      active: false
    } );

    return setIconArray(iconsUpdated);
  }


  return (
    <Flex alignItems='center' justifyContent='space-between' boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)' borderRadius='10px'>
      <Image  ml='15px'  src='https://i.ibb.co/34gZjLG/nory-logo-removebg-preview.png' boxSize='40px' />

      <Flex >
        {iconArray.map((icon: any) => <NavItem icon={icon} navSize={navSize} direction='top' onSelected={navClicked} /> )}
      </Flex>
    </Flex>
  )
}

export default TopBar;
