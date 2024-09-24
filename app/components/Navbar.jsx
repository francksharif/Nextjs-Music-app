'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import LogoutButton from "./Logout";




export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    {/** Close dropdown */}
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


    return(
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/dashboard" className="text-white text-lg font-semibold">
                Music App
              </Link>
            </div>
  
            {/* Desktop Links */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/dashboard/songs" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Songs
                </Link>
                <Link href="/dashboard/playlists" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Playlists
                </Link>

                { /* Logout Button */}
                <LogoutButton />
              </div>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu (dropdown) */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/dashboard" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Dashboard
              </Link>
              <Link href="/dashboard/songs" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Songs
              </Link>
              <Link href="/dashboard/playlists" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Playlists
              </Link>

              {/** Logout Button */}
             <LogoutButton />
            </div>
          </div>
        )}
      </nav>
    );
}