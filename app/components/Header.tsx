"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useScheduleModal from "../hooks/useScheduleModal";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the burger menu

export default function Header() {
  const pathname = usePathname();
  const scheduleModal = useScheduleModal();
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  return (
    <div
      className="
       fixed
       top-0
       h-[70px]
       w-screen
       flex
       justify-between
       items-center
       px-5
       md:px-20
       border-b-[1px]
       border-b-neutral-100
       bg-white
       z-40
     "
    >
      <div className="flex flex-row gap-3 items-center">
        {" "}
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}{" "}
          {/* Show X when open, ☰ when closed */}
        </button>
        <Link href="/">
          <h1 className="text-[25px] font-black text-[#404040]">Miceburg</h1>
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-10 items-center">
        <Link
          href="/"
          className={`text-[15px] ${
            pathname === "/"
              ? "text-[#0094ea] font-black"
              : "text-[#404040] hover:underline"
          }`}
        >
          Home
        </Link>
        <Link
          href="/jobs-for-you"
          className={`text-[15px] ${
            pathname === "/jobs-for-you"
              ? "text-[#0094ea]"
              : "text-[#404040] hover:underline"
          }`}
        >
          Jobs For You
        </Link>
        <Link
          href="/application"
          className={`text-[15px] ${
            pathname === "/application"
              ? "text-[#0094ea]"
              : "text-[#404040] hover:underline"
          }`}
        >
          Application
        </Link>
        <Link
          href="/services"
          className={`text-[15px] ${
            pathname === "/services"
              ? "text-[#0094ea]"
              : "text-[#404040] hover:underline"
          }`}
        >
          Services
        </Link>
        <Link
          href="/about"
          className={`text-[15px] ${
            pathname === "/about"
              ? "text-[#0094ea]"
              : "text-[#404040] hover:underline"
          }`}
        >
          About
        </Link>
        <p>|</p>
      </div>

      {/* Schedule Meeting Button (Always Visible) */}
      <button
        onClick={scheduleModal.onOpen}
        className="text-[14px] text-[#0094ea] border-2 border-[#0094ea] px-8 py-2 rounded-full hover:bg-[#0094ea] hover:text-white transition-all duration-500 ease-in-out hidden md:block"
      >
        Schedule Meeting
      </button>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md p-5 flex flex-col items-center md:hidden">
          <Link
            href="/"
            className="py-2 text-[15px] text-[#404040] hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/jobs-for-you"
            className="py-2 text-[15px] text-[#404040] hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Jobs For You
          </Link>
          <Link
            href="/application"
            className="py-2 text-[15px] text-[#404040] hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Application
          </Link>
          <Link
            href="/services"
            className="py-2 text-[15px] text-[#404040] hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="py-2 text-[15px] text-[#404040] hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <button
            onClick={() => {
              scheduleModal.onOpen();
              setMenuOpen(false);
            }}
            className="text-[14px] text-[#0094ea] border-2 border-[#0094ea] px-8 py-2 rounded-full hover:bg-[#0094ea] hover:text-white transition-all duration-500 ease-in-out mt-4"
          >
            Schedule Meeting
          </button>
        </div>
      )}
    </div>
  );
}
