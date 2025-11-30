import { IconProps } from "@/module/_core/infras/config/type/icon";

const BackIcon = ({ className = "w-6 h-6", color = "#000000" }: IconProps) => {
  return (
    <svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.293.293a1 1 0 111.414 1.414L2.414 7l5.293 5.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6z"
        fill={color}
      />
    </svg>
  );
};

export default BackIcon;
