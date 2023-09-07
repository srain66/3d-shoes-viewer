import { useViewerDispatch, useViewerState } from "@/hooks/useViewer";
import { Colors, LaceColor, MetalColor, SoleColor } from "@/interfaces/Colors";
import { ChangeEvent } from "react";
import { FaPalette } from "react-icons/fa";
import PartColorPicker from "./PartColorPicker";
import PartColorOptions from "./PartColorOptions";
import PartGroup from "./PartGroup";

interface IProps {}

export default function SelectColor({}: IProps): JSX.Element {
  const { colors } = useViewerState();
  const { setColors } = useViewerDispatch();

  const handleChange = (current: Partial<Colors>) =>
    setColors({ ...colors, ...current });

  return (
    <div className="flex items-center gap-4 w-full">
      <div
        className={"rounded-full bg-red-500 p-0.5"}
        style={{
          backgroundColor: "#00DBDE",
          backgroundImage: `linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)`,
        }}
      >
        <span className="rounded-full block p-2 text-3xl bg-white">
          <FaPalette />
        </span>
      </div>

      <div className="relative flex items-center justify-start gap-2 w-full">
        <PartGroup name="Background">
          <PartColorPicker
            title="배경 색상"
            color={colors.background}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange({ background: e.target.value })
            }
          />
        </PartGroup>
        <PartGroup name="Shoe">
          <PartColorPicker
            title="포인트 색상"
            color={colors.point}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange({ point: e.target.value })
            }
          />
          <PartColorPicker
            title="주 색상"
            color={colors.primary}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange({ primary: e.target.value })
            }
          />
          <PartColorPicker
            title="부 색상"
            color={colors.secondary}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange({ secondary: e.target.value })
            }
          />
        </PartGroup>
        <PartGroup name="Acc">
          <PartColorOptions
            title="금속 색상"
            name="metal"
            color={colors.metal}
            options={Object.values(MetalColor)}
            onChange={(value) => handleChange({ metal: value as MetalColor })}
          />
          <PartColorOptions
            title="끈 색상"
            name="lace"
            color={colors.lace}
            options={Object.values(LaceColor)}
            onChange={(value) => handleChange({ lace: value as LaceColor })}
          />
          <PartColorOptions
            title="밑창 색상"
            name="sole"
            color={colors.sole}
            options={Object.values(SoleColor)}
            onChange={(value) => handleChange({ sole: value as SoleColor })}
          />
        </PartGroup>
      </div>
    </div>
  );
}
