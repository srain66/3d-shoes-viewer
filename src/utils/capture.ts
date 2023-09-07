import html2canvas from "html2canvas";

interface CaptureCanvasOption {
  name?: string;
  extension?: string;
}

export default function captureCanvas(
  canvas: HTMLCanvasElement,
  option: CaptureCanvasOption = {}
): void {
  html2canvas(canvas)
    .then((canvas) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = option.name ?? "image";
          a.click();
          URL.revokeObjectURL(url);
        },
        option.extension ?? "image/jpeg",
        1
      );
    })
    .catch((error) => console.error(error));
}
