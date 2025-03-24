"use client";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
}) => {
  return (
    <button
      onClick={onClick} // This ensures the onClick function is triggered
      disabled={disabled}
      className={`
        relative
        disabled:opacity-50
        disabled:cursor-not-allowed
        rounded-full
        font-black
        hover:opacity-80
        w-full
        text-[15px]
        h-[50px]
        ${outline ? "bg-white" : "bg-[#0094ea]"}
        ${outline ? "border-black" : "border-[#0094ea]"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-[17px]" : "text-[17px]"}
        ${small ? "font-light" : "text-black"}
        ${small ? "border-[1px]" : "border-2"}

      `}
    >
     
      {label}
    </button>
  );
};

export default Button;
