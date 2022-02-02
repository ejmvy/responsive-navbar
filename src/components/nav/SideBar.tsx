import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Icon, Image, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import { useState } from "react";
// import { FaCalendarCheck} from 'react-icons/fa';
// import { RiTimerLine } from 'react-icons/ri';
import NavItem from "./NavItem";

const SideBar = ({ icons }: any) => {
  const [navSize, changeNavSize] = useState('large');
  const [ iconArray, setIconArray] = useState(icons);

  const settingsIcon = {
    title: 'Settings',
    icon: SettingsIcon
  }

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
    <Flex  h='100vh' w={navSize === 'small' ? '75px' : '200px'} flexDirection='column' justifyContent='space-between' boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)' borderRadius={navSize === 'small' ? '15px' : '30px'}>
      
      <Flex py='5%' flexDirection='column' alignItems='flex-start' as='nav'>
        <Image pl='5%' mx={navSize === 'small' ? 'auto' : '0'} boxSize='50px' src='https://i.ibb.co/34gZjLG/nory-logo-removebg-preview.png' onClick={() => { navSize === 'small' ? changeNavSize('large') : changeNavSize('small')}} _hover={{ cursor: 'pointer'}} />
        
        { iconArray.filter((icon: any) => icon.title !== 'Settings').map((icon: any, idx: number) => {
            return <NavItem  key={idx} navSize={navSize} icon={icon} onSelected={navClicked} direction='side' />
        }) }

      </Flex>

      <Flex p={4} flexDirection='column' w='100%' alignItems='center'>
        <Flex alignItems='center'>
          <Icon as={settingsIcon.icon} color='gray.500' w={6} h={6} />
          <Text display={navSize === 'small' ? 'none' : 'flex'} ml={4} size='small' color='gray.500'>{ settingsIcon.title }</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SideBar;