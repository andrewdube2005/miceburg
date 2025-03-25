"use client";

import Link from "next/link";
import React from "react";

import useScheduleModal from "../hooks/useScheduleModal";

export default function Footer() {
  const scheduleModal = useScheduleModal();

  return (
    <div
      className="
        px-20
        py-10
        flex
        flex-col
        bg-neutral-100
        border-t-[1px]
        border-t-neutral-200
      "
    >
      <div className="">
        <h1 className="text-[20px] font-black text-[#404040]">Miceburg</h1>
      </div>
      <div className="flex flex-row items-start justify-between">
        <div className="mt-5 flex flex-col gap-2 items-start">
          <p className="text-[15px] font-black">Useful Links</p>
          <Link
            href="/"
            className="pt-1 text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            Jobs
          </Link>
          <Link
            href="/"
            className="text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            Application
          </Link>
          <Link
            href="/"
            className="text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            Services
          </Link>
          <Link
            href="/"
            className="text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            About
          </Link>
          <div
            onClick={scheduleModal.onOpen}
            className="cursor-pointer text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            Schedule Meeting
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2 items-start">
          <p className="text-[15px] font-black">Useful Links</p>
          <Link
            href="/"
            className="pt-1 text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-2 items-start">
          <p className="text-[15px] font-black">Useful Links</p>
          <Link
            href="/"
            className="pt-1 text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-2 items-start">
          <p className="text-[15px] font-black">Useful Links</p>
          <Link
            href="/"
            className="pt-1 text-[14px] text-[#656565] hover:underline hover:text-sky-500 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
        </div>
      </div>

      <div className="">
        <div className="mt-8">
          <p className="text-[13px] text-[#656565]">Miceburg Copyright 2025 - All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
