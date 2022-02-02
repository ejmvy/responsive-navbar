import { FiCalendar, FiHome, FiUser } from 'react-icons/fi';
import { SettingsIcon } from "@chakra-ui/icons";

const icons = [
  {
    title: 'Dashboard',
    icon: FiHome,
    active: true,
    path: '/',
  },
  {
    title: 'Calendar',
    icon: FiCalendar,
    active: false,
    path: '/calendar',
  },
  {
    title: 'User',
    icon: FiUser,
    active: false,
    path: '/user',
  },
  {
    title: 'Settings',
    icon: SettingsIcon,
    active: false,
    path: '/settings',
  }
]

export default icons;