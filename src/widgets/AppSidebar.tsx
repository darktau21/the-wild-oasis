import { PAGE_PATHS } from '@shared/lib/react-router';
import { Logo, MainNav, NavigationLink, Sidebar } from '@shared/ui';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUser,
} from 'react-icons/hi2';

const AppSidebar = () => {
  return (
    <Sidebar>
      <Logo />
      <MainNav>
        <NavigationLink to={PAGE_PATHS.dashboard}>
          <HiOutlineHome />
          <span>Home</span>
        </NavigationLink>
        <NavigationLink to={PAGE_PATHS.bookings}>
          <HiOutlineCalendarDays />
          <span>Bookings</span>
        </NavigationLink>
        <NavigationLink to={PAGE_PATHS.cabins}>
          <HiOutlineHomeModern />
          <span>Cabins</span>
        </NavigationLink>
        <NavigationLink to={PAGE_PATHS.users}>
          <HiOutlineUser />
          <span>Users</span>
        </NavigationLink>
        <NavigationLink to={PAGE_PATHS.settings}>
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </NavigationLink>
      </MainNav>
    </Sidebar>
  );
};

export default AppSidebar;
