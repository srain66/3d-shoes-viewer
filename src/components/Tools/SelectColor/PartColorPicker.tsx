import { HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLInputElement> {
  title: string;
  color: string;
}

export default function PartColorPicker({
  title,
  color,
  ...inputProps
}: IProps): JSX.Element {
  return (
    <label title={title} className="relative cursor-pointer">
      <span
        className="w-8 h-8 block rounded-full outline outline-white"
        style={{ background: color }}
      ></span>
      <input
        type="color"
        value={color}
        className="absolute -top-4 left-2 w-0 h-0 invisible"
        {...inputProps}
      />
    </label>
  );
}
