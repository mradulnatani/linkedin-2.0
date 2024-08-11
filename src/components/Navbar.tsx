"use client"
import Link from "next/link";
import { FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
const Navbar = () => {
    return (
        <nav className="bg-black border-b border-gray-300 h-14">
          <div className="flex flex-row items-center gap-5">
            <div>
                      <Link href={"/"} className="text-black text-3xl font-bold ml-40 rounded-sm bg-blue-600 w-10 text-center absolute h-10">in</Link>
              <input type="text" placeholder="search" className="rounded-md bg-neutral-700 h-9 ites-center ml-52 w-72 "></input>
            
            </div>
            <div className=" m-auto p-auto flex items-center flex-row flex-wrap gap-10 h-14">
                <NavItem icon={<FaHome />} text="Home" />
                <NavItem icon={<FaUserFriends />} text="My Network" />
                <NavItem icon={<FaBriefcase />} text="Jobs" />
                <NavItem icon={<FaCommentDots />} text="Messaging" />
                <NavItem icon={<FaBell />} text="Notifications" />
                <NavItem icon={<CgProfile />} text="Me" />
                </div>
                </div>
    
        </nav>
      );
    }
function NavItem({ icon, text }) {
    return (
      <Link href="#" className="flex flex-col items-center text-white hover:border-b-2">
        <div className="text-xl">{icon}</div>
        <div className="text-xs">{text}</div>
      </Link>
    );
  }
export default Navbar;
