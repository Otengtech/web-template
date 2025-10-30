"use-client"

import HeroSection from "./Components/HeroSection";
import LatestDrops from "./Components/LatestDrops";
import StreamsSection from "./Components/StreamSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StreamsSection />
      <LatestDrops />
    </div>
  );
}

export default HomePage;
