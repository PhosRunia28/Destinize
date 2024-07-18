import MapCard from "../Common/MapCard";
import TitleCenter from "../Common/TitleCenter";

export default function MapSection() {
  return (
    <section className="container pb-36 font-manrope">
      <div className="flex flex-col gap-12">
        <TitleCenter
          subtitle="CARI TEMPAT WISATA"
          title="Cari Tempat Wisata Didekatmu"
          description="Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat
            yang sedang populer di daerah kamu dengan begitu kamu akan selalu
            update dan gak kudet lagi 👍🏻"
        />
        <img
          src="./image/map.png"
          alt="map"
          className="min-h-[200px] bg-cover bg-center"
        />
        <div className="grid grid-cols-1 justify-between gap-8 sm:grid-cols-2 md:grid-cols-3">
          <MapCard
            image="./icon/mapPin.svg"
            title="Populer di dekatmu"
            subtitle="Tempat pariwisata yang populer dan pasti dikenal semua orang
                  didekatmu"
          />
          <MapCard
            image="./icon/love.svg"
            title="Favorit di dekatmu"
            subtitle="Tempat favorit dan disukai semua orang orang di sekitar daerah kamu"
          />
          <MapCard
            image="./icon/people.svg"
            title="Ramai di didekatmu"
            subtitle="Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan"
          />
        </div>
      </div>
    </section>
  );
}
