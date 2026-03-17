import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";

export default function Home() {
  return (
    <div className="max-w-[1184px] mx-auto min-h-screen pt-8 lg:pt-8 lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 px-4 lg:px-0">
      <div className="lg:col-span-5 xl:col-span-4">
        <Sidebar />
      </div>
      <div className="lg:col-span-7 xl:col-span-8">
        <MainContent />
      </div>
    </div>
  );
}
