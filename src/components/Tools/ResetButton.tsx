import { BiReset } from "react-icons/bi";
import cls from "classnames";
import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export default function ResetButton({
  active,
  onClick,
  ...props
}: IProps): JSX.Element {
  return (
    <button
      title="Reset Camera"
      className={cls(
        "fixed right-4  w-12 h-12 rounded-full transition text-xl flex justify-center items-center text-white bg-red-500 hover:bg-red-700 hover:text-red-100 transition-all duration-500",
        active ? "top-4" : "-top-20"
      )}
      onClick={onClick}
      {...props}
    >
      <BiReset />
    </button>
  );
}
