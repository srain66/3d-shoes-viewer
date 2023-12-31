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
          const confirmed = confirm(
            "Captured! Would you like to save the file?"
          );
          if (!confirmed) return;
          const a = document.createElement("a");
          a.href = url;
          a.download = option.name ?? "image";
          a.click();
          URL.revokeObjectURL(url);
        },
        option.extension ?? "image/png",
        1
      );
    })
    .catch((error) => console.error(error));
}
