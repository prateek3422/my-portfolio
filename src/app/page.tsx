import { Navbar } from "@/components/navbar";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black antialiased overflow-hidden">
      <AnimatedBackground />
      <Spotlight className="-top-40 left-0" />
      <Navbar />
    </main>
  );
}
