import React from "react";
import Jobs from "../components/Jobs";

export default function page() {
  const jobs = [
    {
      id: 1,
      title: "Consultant",
      imgUrl: "/images/bg.jpg",
      salary: "300",
      description: "Looking for qualified personell.",
    },
    {
      id: 2,
      title: "Manager",
      imgUrl: "/images/bg.jpg",
      salary: "450",
      description: "Looking for qualified personell.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 items-start px-20 py-[70px]">
      <p className="text-[25px] text-[#656565] pt-10">Jobs For You</p>
      <div
        className="
            grid 
            grid-cols-1 
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-x-5
            gap-y-5
          "
      >
        {jobs.map((job, index) => (
          <Jobs
            key={index}
            title={job.title}
            imgUrl={job.imgUrl}
            salary={job.salary}
            description={job.description}
          />
        ))}
      </div>
    </div>
  );
}
