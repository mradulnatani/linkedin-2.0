"use client"
import Link from "next/link";
import { FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
import { usePathname } from "next/navigation";

const paths = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/my-network", label: "My Network", icon: <FaUserFriends /> },
  { path: "/jobs", label: "Jobs", icon: <FaBriefcase /> },
  { path: "/messaging", label: "Messaging", icon: <FaCommentDots /> },
  { path: "/notification", label: "Notifications", icon: <FaBell /> },
  { path: "/me", label: "Me", icon: <CgProfile /> },
];

const NavItem = ({ icon, text, path }) => {
  const pathname = usePathname();
  return (
    <Link 
      href={path} 
      className={`flex flex-col items-center text-white hover:text-blue-500 ${
        path === pathname ? "border-b-2" : ""
      }`}
    >
      <div className="text-xl">{icon}</div>
      <div className="text-xs">{text}</div>
    </Link>
  );
}

const Navbar = () => {
  return (
    <nav className="bg-black border-b-1 border-gray-300 h-14">
      <div className="flex flex-row items-center gap-4">
        <div>
          <Link href={"/"} className="text-black text-3xl font-bold ml-40 rounded-3xl bg-blue-600 w-10 text-center absolute h-9 hover:animate-pulse">
            in
          </Link>
          <input type="text" placeholder="  search" className="rounded-md bg-neutral-700 h-9 items-center ml-52 w-96" />
        </div>
        <div className="m-auto p-auto flex items-center flex-row flex-wrap gap-12 h-14">
          {paths.map((item, index) => (
            <NavItem key={index} icon={item.icon} text={item.label} path={item.path} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;