import { Play } from "lucide-react";
import { useState } from "react";
import CardBlog from "../Common/CardBlog";
import TitleSeeAll from "../Common/TitleSeeAll";

export default function BlogAndBanner() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className="container pb-36 font-plusJakarta">
      <div className="flex flex-col gap-14">
        <TitleSeeAll
          title="🖼• Galeri Pariwisata & Blog Travel"
          subtitle="MENGENAL DESTINIZE"
          link="#"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-14">
          <CardBlog
            image="./image/destination/destination4.png"
            title="Tips naik gunung Bromo Biar gak capek cyin 😥😛"
            description="Jadi gini gann, anda tau bromo? yaaa gunung kann!"
            date="26 DESEMBER 2021"
            link="#"
          />
          <div className="relative w-full md:col-span-2">
            <div className="h-[350px] sm:h-[400px] md:h-full">
              <img
                src="./image/videoImage.png"
                alt="video Image"
                className="h-full w-full bg-cover bg-center"
              />
              <div className="absolute inset-0 mx-auto flex max-w-fit items-center justify-center md:inset-40">
                <button
                  className="rounded-full bg-primary1 p-5"
                  onClick={() => setOpenVideo(!openVideo)}
                >
                  <Play className="text-white" />
                </button>
              </div>
            </div>
            {openVideo && (
              <div className="absolute inset-0 z-40">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=jPrBes_wUs1vgOz5"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="relative h-[280px] w-full rounded-xl sm:h-[250px] md:col-span-3">
            <img
              src="./image/coverImage.jpg"
              alt="cover Image"
              className="h-full w-full rounded-xl bg-cover bg-center"
            />
            <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-black/50 px-8 py-8 text-white md:gap-5">
              <h4 className="text-2xl font-black">
                Tips meminum air kawah biar lidah melepuh 😁
              </h4>
              <p className="w-full max-w-lg text-sm font-medium leading-relaxed">
                Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi
                untuk di minum.. rasakan kepanasan yang brutal 🔥
              </p>
              <div className="flex gap-6 text-sm">
                <h5 className="font-semibold">Goggle</h5>
                <h5 className="font-semibold">Trending</h5>
                <h5 className="font-semibold">Baru</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
