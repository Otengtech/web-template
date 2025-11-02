"use-client"

import GalleryInfo from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import LatestDrops from "./Components/LatestDrops";
import StreamsSection from "./Components/StreamSection";
import UpcomingShows from "./Components/UpcomingShows";
import WatchNow from "./Components/WatchNow";
import Review from "./Components/Review";
import About from "./Components/About";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <StreamsSection />
      <LatestDrops />
      <UpcomingShows />
      <WatchNow />
      <Review />
      <GalleryInfo />
    </div>
  );
}

export default HomePage;
