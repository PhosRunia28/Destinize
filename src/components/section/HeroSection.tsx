import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import ModalVideoDemo from "../Common/ModalVideoDemo";
import { Button } from "../ui/button";

export default function HeroSection() {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <section className="container pb-10 pt-4 font-plusJakarta lg:pt-10">
      <div className="flex flex-col-reverse justify-between lg:flex-row">
        <div className="relative z-10 flex flex-col gap-7 sm:mx-auto sm:-mt-8 sm:w-full sm:max-w-fit md:-mt-20 lg:mt-0">
          <div className="space-y-4">
            <div className="w-full max-w-fit rounded-full bg-muted1 px-3 py-2 text-sm font-bold text-primary1">
              ✈ • Explore the wonderful indonesia!
            </div>
            <h2
              className="w-full max-w-sm text-3xl font-bold sm:text-4xl md:max-w-lg md:text-5xl xl:text-6xl"
              style={{ lineHeight: 1.2 }}
            >
              Liburan & nikmati <span className="text-primary1">tempat</span> di
              indonesia ️
            </h2>
          </div>
          <p className="w-full max-w-md text-sm leading-[1.8] text-gray">
            Destinize membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
          <div className="flex flex-col items-center gap-8 min-[500px]:flex-row min-[500px]:gap-12">
            <Button className="flex items-center gap-2 px-7 py-6 font-bold shadow-lg shadow-primary1">
              Mulai Sekarang <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <button
                className="group w-full max-w-fit rounded-full border border-primary1 bg-white p-3 shadow-2xl transition hover:bg-primary1"
                onClick={() => setOpenVideo(!openVideo)}
              >
                <Play className="h-5 w-5 text-primary1 group-hover:text-white" />
              </button>
              <p className="text-sm font-bold text-gray">Play Demo</p>
            </div>
          </div>
        </div>
        <img
          src="./image/heroImage.png"
          alt="hero image"
          className="relative -z-10 mx-auto -mt-16 w-full max-w-[90vw] bg-cover bg-center sm:max-w-[70vw] md:-mt-32 lg:-mt-40 lg:max-w-[50vw] xl:-mt-44"
        />
      </div>
      {/* demo video */}
      <ModalVideoDemo openVideo={openVideo} setOpenVideo={setOpenVideo} />
    </section>
  );
}
