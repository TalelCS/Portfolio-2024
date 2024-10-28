import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import { TimelineDemo } from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { ModalProvider } from "@/components/ui/animated-modal";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navigation />
        <Hero />
        <Grid />
        <TimelineDemo />
        <RecentProjects />
        <Clients />
        <Approach />
        <ModalProvider>
          <Footer />
        </ModalProvider>
      </div>
    </main>
  );
}
