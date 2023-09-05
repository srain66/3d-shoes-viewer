import Layout from "@/components/Layout";
import Viewer from "@/components/Viewer";
import ViewerProvider from "@/providers/ViewerProvider";

export default function Home() {
  return (
    <ViewerProvider>
      <Layout className="w-screen h-screen">
        <Viewer className="w-full h-full flex flex-col" />
      </Layout>
    </ViewerProvider>
  );
}
