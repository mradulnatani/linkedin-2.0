"use client"

import Midnav from "~/components/ui/Midnav";
import Sidenav from "~/components/ui/Sidenav";
import Rightnav from "~/components/ui/Rightnav";

export default function HomePage() {
  return (
    <div className="text-black bg-gray-900 h-full m-auto p-auto flex">
      <Sidenav />
      <div className="flex flex-grow">
        <Midnav />
        <Rightnav />
      </div>
    </div>
  );
}