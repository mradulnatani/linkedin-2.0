"use client"
import Createaccount from "~/components/ui/Createaccount";
import Midnav from "~/components/ui/Midnav";
import Sidenav from "~/components/ui/Sidenav";
import Rightnav from "~/components/ui/Rightnav";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

export default function HomePage({ Component, pageProps }: AppProps)  {
  return (
    <ClerkProvider {...pageProps}>
            <SignedOut>
              <Createaccount/>
            </SignedOut>
            <SignedIn>
              <div className="text-black bg-gray-900 h-full m-auto p-auto flex">
      <Sidenav />
      <div className="flex flex-grow">
        <Midnav />
        <Rightnav />
      </div>
    </div>
            </SignedIn>
    </ClerkProvider>
  );
}