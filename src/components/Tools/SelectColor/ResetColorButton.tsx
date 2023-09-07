import { useViewerDispatch } from "@/hooks/useViewer";
import { HTMLAttributes } from "react";
import { BiSolidColor } from "react-icons/bi";

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

export default function ResetColorButton({ ...props }: IProps): JSX.Element {
  const { resetColors } = useViewerDispatch();

  return (
    <button
      className={"rounded-full bg-red-500 p-0.5"}
      style={{
        backgroundColor: "#00DBDE",
        backgroundImage: `linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)`,
      }}
      onClick={resetColors}
      {...props}
    >
      <span className="rounded-full block p-2 text-3xl bg-white hover:bg-gray-100">
        <BiSolidColor />
      </span>
    </button>
  );
}
