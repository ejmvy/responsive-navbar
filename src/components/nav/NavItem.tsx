import { Flex, Icon, Menu, MenuButton, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const NavItem = ({ navSize, icon, direction, onSelected }: any) => {

  const navigate = useNavigate();


  const changeRoute = (path: string) => {
    onSelected(icon.title);
    navigate(`${path}`);
  }

  const getWidth = () => {
    if (navSize === 'small' && direction === 'side') return '72%';
    else return '100%';
  }

  return (
    <Flex onClick={() => changeRoute(icon.path)}  p='15px'  mt={direction === 'side' ? '30px' : '0' } flexDirection='column' w='100%' borderRight={direction === 'side' && icon.active ? '2px' : '0'} borderBottom={direction === 'top' && icon.active ? '2px' : '0'} borderBottomColor='purple.400' borderRightColor='purple.400' alignItems={navSize === 'small' ? 'center' : 'flex-start'}>
      <Menu placement='right'>
      {/* #AEC8CA #82AAAD */}
        <Flex bgColor={icon.active && '#cfc2e9'} p={2} w={getWidth()} borderRadius={8} _hover={{ textDecor:'none', bgColor: '#cfc2e9'}} >
          <MenuButton w='100%'>
            <Flex  alignItems='center'>
              <Icon as={ icon.icon } color={icon.active ? 'white' : 'gray.500' } />
              <Text ml={5} display={navSize === 'small' ? 'none' : 'flex'}>{ icon.title }</Text>
            </Flex>
          </MenuButton>
        </Flex>
      </Menu>
    </Flex>
  )
}

export default NavItem;