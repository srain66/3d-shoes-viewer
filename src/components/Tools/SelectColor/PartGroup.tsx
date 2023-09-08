import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  name?: string;
}

export default function PartGroup({
  name = "",
  children,
}: IProps): JSX.Element {
  return (
    <div className="flex items-center bg-gray-100 h-12 p-2 rounded-full">
      <span className="px-3 text-gray-700">{name}</span>
      <div className="flex gap-2">{children}</div>
    </div>
  );
}
