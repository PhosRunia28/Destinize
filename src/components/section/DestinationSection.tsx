import { destinations } from "@/data/DestinationData";
import DestinationCard from "../Common/DestinationCard";
import TitleSeeAll from "../Common/TitleSeeAll";

export default function DestinationSection() {
  return (
    <section className="container space-y-14 pb-32 md:pb-40">
      <TitleSeeAll
        title="✈ • Temukan Destinasi Favoritmu  "
        subtitle="DESTINASI FAVORIT"
        link="#"
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {destinations.map((destination, index) => (
          <DestinationCard cards={destination} key={index} />
        ))}
      </div>
    </section>
  );
}
