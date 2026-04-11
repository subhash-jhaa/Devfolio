import { Sidebar } from "@/components/layout/Sidebar";
import { Projects } from "@/components/sections/Projects";
import { GitHub } from "@/components/sections/GitHub";
import { InterviewCard } from "@/components/ui/InterviewCard";
import ContactSection from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Background } from "@/components/layout/Background";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="max-w-[1440px] mx-auto min-h-screen relative">
        <Background />
        <div className="max-w-[1184px] mx-auto min-h-screen pt-8 lg:pt-8 lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 px-4 lg:px-0 relative z-20">
          <div className="lg:col-span-5 xl:col-span-4">
            <Sidebar />
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <main className="flex-1 p-4 lg:p-6 lg:pl-0 space-y-8">
              <Projects />
              <GitHub />
              <InterviewCard />
              <ContactSection />
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

