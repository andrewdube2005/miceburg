"use client";

import React, { useState } from "react";

import Modal from "./Modal";
import useScheduleModal from "../hooks/useScheduleModal";

const ScheduleModal = () => {
  const scheduleModal = useScheduleModal();
  const [isLoading, setIsLoading] = useState(false);

  // Modal body content
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <input
        placeholder="Name"
        disabled={isLoading}
        className="border-2 border-[#404040] rounded-[16px] px-5 h-[55px] text-[#707070] text-[15px] focus:border-[#0094ea] outline-none placeholder:text-[#404040] caret-[#0094ea]"
      />
      <input
        placeholder="Your Business Name"
        disabled={isLoading}
        className="border-2 border-[#404040] rounded-[16px] px-5 h-[55px] text-[#707070] text-[15px] focus:border-[#0094ea] outline-none placeholder:text-[#404040] caret-[#0094ea]"
      />{" "}
      <input
        placeholder="Email"
        disabled={isLoading}
        className="border-2 border-[#404040] rounded-[16px] px-5 h-[55px] text-[#707070] text-[15px] focus:border-[#0094ea] outline-none placeholder:text-[#404040] caret-[#0094ea]"
      />{" "}
      <input
        placeholder="Phone Number"
        disabled={isLoading}
        className="border-2 border-[#404040] rounded-[16px] px-5 h-[55px] text-[#707070] text-[15px] focus:border-[#0094ea] outline-none placeholder:text-[#404040] caret-[#0094ea]"
      />{" "}
      <select
        className="border-2 border-[#404040] rounded-[16px] px-5 h-[55px] text-[#707070] text-[15px] focus:border-[#0094ea] outline-none placeholder:text-[#404040] caret-[#0094ea]"
        name=""
        id=""
      >
        <option value="">Consultant</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={scheduleModal.isOpen}
      title="Schedule Meeting"
      subtitle="Setup your next meeting"
      actionLabel="Schedule Meeting"
      onClose={scheduleModal.onClose}
      onSubmit={() => {}} // Call Firebase login
      body={bodyContent}
    />
  );
};

export default ScheduleModal;
