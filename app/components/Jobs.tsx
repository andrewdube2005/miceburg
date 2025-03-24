import Image from "next/image";
import Link from "next/link";

interface JobsProps {
  title?: string;
  location: string;
  experience: string;
  deadline: string;
  status: string;
}

const Jobs: React.FC<JobsProps> = ({
  title,
  location,
  experience,
  deadline,
  status,
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-[20px] w-full h-full aspect-12/9 box-shadow px-5 py-4 ">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px] font-black text-[#505050]">{title}</h1>
          <Link href="/" className="text-[13px] text-sky-500 rounded-full border-sky-500 border-[1.5px] px-5 py-1 hover:bg-sky-500 hover:text-white transition-all duration-500 ease-in-out">
            Apply
          </Link>
        </div>
        <div className="bg-neutral-100/80 w-max rounded-full px-6 py-[2px]">
          <p className="text-[14px] text-[#505050]">{location}</p>
        </div>
        <p className="text-[14px] text-[#656565] pt-4">
          Deadline: <span className="text-red-500 font-black">{deadline}</span>
        </p>
        <p className="text-[14px] text-[#656565]">
          Status: <span className="text-green-500 font-black">{status}</span>
        </p>
        <p className="text-[20px] text-[#656565] pt-5">
          <span className="font-black">{experience}</span>{" "}
          <span className="text-[14px] ">Year Experience</span>
        </p>
      </div>
    </div>
  );
};

export default Jobs;
