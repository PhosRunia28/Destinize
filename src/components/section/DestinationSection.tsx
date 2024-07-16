import { destinations } from "@/data/DestinationData";
import { ChevronRight } from "lucide-react";
import DestinationCard from "../Common/DestinationCard";
import { Button } from "../ui/button";

export default function DestinationSection() {
  return (
    <section className="container space-y-14 pb-20">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="space-y-2 font-manrope">
          <h5 className="text-sm font-black uppercase tracking-wide text-primary1">
            DESTINASI FAVORIT
          </h5>
          <h3 className="text-2xl font-black sm:text-3xl lg:text-4xl">
            ✈ • Temukan Destinasi Favoritmu
          </h3>
        </div>
        <div>
          <Button variant="link" className="flex gap-2 text-primary1">
            Lihat Semua <ChevronRight className="text-primary1" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {destinations.map((destination, index) => (
          <DestinationCard cards={destination} key={index} />
        ))}
      </div>
    </section>
  );
}
