import React from "react";
import Jobs from "../components/Jobs";

export default function page() {
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
    <div className="flex flex-col gap-10 items-start nd:px-20 px-5 py-[70px]">
      <p className="text-[25px] text-[#656565] pt-10">Jobs For You</p>
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
  );
}
