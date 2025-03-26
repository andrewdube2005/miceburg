"use client";

import Link from "next/link";
import useScheduleModal from "./hooks/useScheduleModal";
import Jobs from "./components/Jobs";

export default function Home() {
  const scheduleModal = useScheduleModal();

  const jobs = [
    {
      id: 1,
      title: "Consultant",
      location: "Harare",
      experience: "5",
      deadline: "30 June",
      status: "Open",
    },
    {
      id: 2,
      title: "Manager",
      location: "Gweru",
      experience: "3",
      deadline: "30 June",
      status: "Open",
    },
    {
      id: 3,
      title: "Programmer",
      location: "Bulawayo",
      experience: "2",
      deadline: "10 June",
      status: "Open",
    },
    {
      id: 4,
      title: "Plumber",
      location: "Harare",
      experience: "1",
      deadline: "2 March",
      status: "Closed",
    },
  ];

  return (
    <div className="pt-[70px] h-full w-full overflow-y-auto">
      <div className="background-image bg-cover bg-center md:h-[60vh] h-[40vh] w-screeen">
        <div className="h-full w-full backdrop-blur-[1px] flex flex-col items-center justify-center gap:8 md:gap-12">
          <div className="leading-16 text-center">
            <h1 className="text-[30px] md:text-[40px] font-black text-white ">Miceburg</h1>
            <p className="fixed-text">Best Business Partner</p>
          </div>
          <button
            onClick={scheduleModal.onOpen}
            className="hover:bg-white hover:text-[#0094ea] transtion-all duration-500 ease-in-out cursor-pointer px-20 py-2 rounded-full bg-transparent backdrop-blur-[1px] text-[15px] text-white border-2 border-white  "
          >
            Schedule Meeting
          </button>
        </div>
      </div>

      <div className="h-[40vh] md:h-[60vh] w-full bg-sky-500 flex flex-col items-center justify-center">
        <h1 className="text-[18px] md:text-[35px] text-white font-black text-center">
          Join us into making a better world
        </h1>
        <p className="text-[17px]  text-white pt-5 font-[savana-thinner]">
          24/7 Service and Support
        </p>
        <Link
          href="/"
          className="mt-10 px-10 py-2 rounded-full border-white border-2 text-white text-[15px] hover:bg-white hover:text-sky-500 transition-all duration-300 ease-in-out"
        >
          Check out our services
        </Link>
      </div>

      <div className="flex flex-col gap-10 items-start md:px-20 px-5 py-10">
        <p className="text-[25px] text-[#656565]">Jobs For You</p>
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-4
            gap-x-5
            gap-y-5
            w-full
          "
        >
          {jobs.map((job, index) => (
            <Jobs
              key={index}
              title={job.title}
              location={job.location}
              experience={job.experience}
              deadline={job.deadline}
              status={job.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
