"use client";

import React, { useState } from "react";

export default function Page() {
  const [cv, setCv] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCv(event.target.files[0]); // Store selected file in state
    }
  };

  return (
    <div className="pt-[70px] h-full w-full overflow-y-auto">
      <div className="py-5 px-5 md:px-20">
        <h1 className="text-[25px] text-[#656565]">Job Application</h1>
      </div>

      <div className="max-w-3xl mx-auto py-5 flex flex-col gap-4 px-5 md:px-20 mb-10">
        <input
          placeholder="Name"
          className="border-2 border-[#404040] rounded-[16px] px-5 h-[55px] text-[#707070] text-[15px] focus:border-[#0094ea] outline-none placeholder:text-[#404040] caret-[#0094ea]"
        />
        <input
          placeholder="Surname"
          className="border-2 border-[#404040] rounded-[16px] px-5 h-[55px] text-[#707070] text-[15px] focus:border-[#0094ea] outline-none placeholder:text-[#404040] caret-[#0094ea]"
        />
        <input
          placeholder="Email"
          className="border-2 border-[#404040] rounded-[16px] px-5 h-[55px] text-[#707070] text-[15px] focus:border-[#0094ea] outline-none placeholder:text-[#404040] caret-[#0094ea]"
        />

        {/* CV Upload Input */}
        <label className="border-2 border-[#404040] rounded-[16px] px-5 py-3 text-[#707070] text-[15px] cursor-pointer focus:border-[#0094ea] outline-none">
          <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
          {cv ? `Uploaded: ${cv.name}` : "Upload CV (PDF, DOC)"}
        </label>

        <button
          onClick={() => {
            if (cv) {
              alert(`Submitting application with CV: ${cv.name}`);
            } else {
              alert("Please upload your CV before applying.");
            }
          }}
          className="px-0 md:px-20 py-3 bg-[#0094ea] font-black text-white text-[15px] rounded-full"
        >
          Apply Job
        </button>
      </div>
    </div>
  );
}
