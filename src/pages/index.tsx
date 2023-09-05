import Layout from "@/components/Layout";
import Viewer from "@/components/Viewer";

export default function Home() {
  return (
    <Layout className="w-screen h-screen">
      <Viewer className="w-full h-full flex flex-col" />
    </Layout>
  );
}
