"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import useScheduleModal from "../hooks/useScheduleModal";

export default function Header() {
  const pathname = usePathname();
  const scheduleModal = useScheduleModal();

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
       px-20
       border-b-[1px]
       border-b-neutral-100
       bg-white
       z-40
     "
    >
      <Link href="/" className="">
        <h1 className="text-[25px] font-black text-[#404040]">Miceburg</h1>
      </Link>

      {/* links */}
      <div className="flex flex-row gap-10 items-center">
        <div className="flex flex-row gap-10 items-center">
          <Link
            href="/"
            className={
              pathname != "/"
                ? "text-[15px] text-[#404040] hover:underline"
                : "text-[#0094ea] font-black hover:underline"
            }
          >
            Home
          </Link>
          <Link
            href="/jobs-for-you"
            className={
              pathname != "/jobs-for-you"
                ? "text-[15px] text-[#404040] hover:underline "
                : "text-[#0094ea]"
            }
          >
            Jobs For You
          </Link>
          <Link
            href="/application"
            className={
              pathname != "/application"
                ? "text-[15px] text-[#404040] hover:underline "
                : "text-[#0094ea]"
            }
          >
            Application
          </Link>
          <Link
            href="/services"
            className={
              pathname != "/services"
                ? "text-[15px] text-[#404040] hover:underline "
                : "text-[#0094ea]"
            }
          >
            Services
          </Link>
          <Link
            href="/about"
            className={
              pathname != "/about"
                ? "text-[15px] text-[#404040] hover:underline "
                : "text-[#0094ea]"
            }
          >
            About
          </Link>
        </div>
        <p className="">|</p>
        <div>
          <button
            onClick={scheduleModal.onOpen}
            className="text-[14px] text-[#0094ea] border-2 border-[#0094ea] px-8 py-2 rounded-full hover:bg-[#0094ea] hover:text-white transition-all duration-500 ease-in-out "
          >
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  );
}
