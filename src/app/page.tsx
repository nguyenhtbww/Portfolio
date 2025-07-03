import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Features from "@/components/main/Features";
import Image from "next/image";
import Resume from "@/components/main/Resume";
import Projects from "@/components/main/project";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Features/>
        <Skills/>
        <Resume/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  );
}
