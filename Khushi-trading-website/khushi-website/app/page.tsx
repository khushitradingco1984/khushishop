import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhoWeServe from "../components/WhoWeServe";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <WhoWeServe />

      <HomePage />

      <Footer />
    </>
  );
}