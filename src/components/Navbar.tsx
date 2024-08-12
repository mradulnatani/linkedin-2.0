"use client"
import Link from "next/link";
import { FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'

const paths = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/components/my-network", label: "My Network", icon: <FaUserFriends /> },
  { path: "/components/jobs", label: "Jobs", icon: <FaBriefcase /> },
  { path: "/components/messaging", label: "Messaging", icon: <FaCommentDots /> },
  { path: "/components/notifications", label: "Notifications", icon: <FaBell /> },
  { path: "/components/me", label: "Me", icon: <CgProfile /> },
];

const NavItem = ({ icon, text, path }) => {
  return (
    <Link href={path} className="flex flex-col items-center text-white hover:border-b-2">
      <div className="text-xl">{icon}</div>
      <div className="text-xs">{text}</div>
    </Link>
  );
}

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-gray-300 h-14">
      <div className="flex flex-row items-center gap-5">
        <div>
          <Link href={"/"} className="text-black text-3xl font-bold ml-40 rounded-sm bg-blue-600 w-10 text-center absolute h-10">
            in
          </Link>
          <input type="text" placeholder="search" className="rounded-md bg-neutral-700 h-9 items-center ml-52 w-72" />
        </div>
        <div className="m-auto p-auto flex items-center flex-row flex-wrap gap-10 h-14">
          {paths.map((item, index) => (
            <NavItem key={index} icon={item.icon} text={item.label} path={item.path} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;