import Head from "next/head";
import { HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export default function Layout({ children, ...props }: IProps): JSX.Element {
  return (
    <div {...props}>
      <Head>
        <title>3D Shoes Viewer</title>
      </Head>
      {children}
    </div>
  );
}
