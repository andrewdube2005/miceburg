"use client";


interface CardProps {
  title: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ title, link }) => {
  return (
    <div className="flex flex-col justify-between h-full w-full aspect-6/4 bg-[#0b84ff] rounded-[20px] hover:scale-105 transition-all duration-500 cursor-pointer ease-in-out px-6 py-7">
      <div className="text-[#202020] text-[25px] font-black">{title}</div>
      <button className="hover:bg-black hover:text-[#0b84ff] transition-all ease-in-out border-black border-2 rounded-full px-5 py-1">
        Check this service
      </button>
    </div>
  );
};

export default Card;
