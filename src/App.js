import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Collections from "./Components/Collections";
import Community from "./Components/Community";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <Community />
      <Footer />
    </>
  );
}

export default App;
