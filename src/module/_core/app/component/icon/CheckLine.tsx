import { IconProps } from "@/module/_core/infras/config/type/icon";

const CheckLine = ({ className = "w-6 h-6", color = "#4B5563" }: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.293 3.96a1 1 0 111.414 1.414L7.04 12.04a1 1 0 01-1.414 0L2.293 8.707a1 1 0 011.414-1.414l2.626 2.626 5.96-5.96z"
        fill={color}
      />
    </svg>
  );
};

export default CheckLine;
