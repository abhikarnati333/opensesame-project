import Image from "next/image";
import Hero from "./components/Hero";
import CareerJourney from "./components/CareerJourney";
import Strengths from "./components/Strengths";
import AIExcitement from "./components/AIExcitement";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Ending from "./components/Ending";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CareerJourney />
      <Strengths />
      <AIExcitement />
      <Projects />
      <Technologies />
      <Ending />
      <Footer />
    </div>
  );
}
