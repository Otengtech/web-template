"use-client"

import GalleryInfo from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import LatestDrops from "./Components/LatestDrops";
import StreamsSection from "./Components/StreamSection";
import UpcomingShows from "./Components/UpcomingShows";
import WatchNow from "./Components/WatchNow";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StreamsSection />
      <LatestDrops />
      <UpcomingShows />
      <WatchNow />
      <GalleryInfo />
    </div>
  );
}

export default HomePage;
