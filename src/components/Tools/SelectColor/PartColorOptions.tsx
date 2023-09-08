import { useState } from "react";
import cls from "classnames";
import BackdropFilter from "./BackdropFilter";
import { MetalColor } from "@/interfaces/Colors";

interface IProps {
  title: string;
  color: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function PartColorOptions({
  title,
  color,
  options,
  onChange,
}: IProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="relative" title={title}>
        <div
          className="text-white w-8 h-8 block rounded-full outline outline-white cursor-pointer"
          style={{ background: color }}
          onClick={handleToggle}
        ></div>
        {open && (
          <>
            <ul className="absolute bottom-12 -left-4 w-16 h-auto z-20 bg-white drop-shadow-xl rounded p-4 flex flex-col gap-3">
              {options.map((option: string) => {
                return (
                  <li
                    key={option}
                    className={cls(
                      "w-8 h-8 rounded-full cursor-pointer",
                      option === color &&
                        "outline outline-1 outline-gray-500 outline-offset-2"
                    )}
                    style={{ background: option }}
                    onClick={() => onChange(option)}
                  ></li>
                );
              })}
            </ul>
          </>
        )}
      </div>
      {open && <BackdropFilter onClick={handleClose} />}
    </>
  );
}
