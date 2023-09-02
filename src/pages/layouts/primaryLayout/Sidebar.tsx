import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUser,
} from 'react-icons/hi2';
import { PAGE_PATHS } from '@shared/lib';
import { UILogo, UIMainNav, UINavigationLink, UISidebar } from '@shared/ui';

const Sidebar = () => {
  return (
    <UISidebar>
      <UILogo />
      <UIMainNav>
        <UINavigationLink to={PAGE_PATHS.dashboard}>
          <HiOutlineHome />
          <span>Home</span>
        </UINavigationLink>
        <UINavigationLink to={PAGE_PATHS.bookings}>
          <HiOutlineCalendarDays />
          <span>Bookings</span>
        </UINavigationLink>
        <UINavigationLink to={PAGE_PATHS.cabins}>
          <HiOutlineHomeModern />
          <span>Cabins</span>
        </UINavigationLink>
        <UINavigationLink to={PAGE_PATHS.users}>
          <HiOutlineUser />
          <span>Users</span>
        </UINavigationLink>
        <UINavigationLink to={PAGE_PATHS.settings}>
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </UINavigationLink>
      </UIMainNav>
    </UISidebar>
  );
};

export default Sidebar;
