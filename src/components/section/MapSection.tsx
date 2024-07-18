import MapCard from "../Common/MapCard";

export default function MapSection() {
  return (
    <section className="container pb-36 font-manrope">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 text-center">
          <h5 className="font-manrope text-sm font-black uppercase tracking-widest text-primary1 lg:text-base">
            CARI TEMPAT WISATA
          </h5>
          <h3
            className="mx-auto max-w-3xl text-3xl font-black sm:text-4xl md:text-[2.5rem] lg:text-[2.7rem]"
            style={{ lineHeight: 1.3 }}
          >
            Cari Tempat Wisata Didekatmu
          </h3>
          <p className="mx-auto w-full max-w-2xl text-sm leading-[1.8]">
            Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat
            yang sedang populer di daerah kamu dengan begitu kamu akan selalu
            update dan gak kudet lagi 👍🏻
          </p>
        </div>
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
