interface IProps {
  onClick?: () => void;
}

export default function BackdropFilter({ onClick }: IProps): JSX.Element {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-0"
      onClick={onClick}
    ></div>
  );
}
