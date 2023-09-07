import cls from "classnames";
import SelectColorButton from "./SelectColorButton";
import { useState } from "react";

interface IProps {}

export default function SelectColor({}: IProps): JSX.Element {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-2">
      <SelectColorButton onClick={() => setActive(!active)} />
      <div
        className={cls(
          "overflow-hidden transition-all",
          active ? "w-full" : "w-0"
        )}
      >
        <ul className="flex items-center gap-1">
          <li>배경</li>
          <li>주색상</li>
          <li>부색상</li>
          <li>포인트</li>
          <li>메탈</li>
          <li>끈</li>
          <li>밑창</li>
        </ul>
      </div>
    </div>
  );
}
