import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

export default function BannerSection() {
  return (
    <section className="container pb-40 font-manrope">
      <div className="relative w-full rounded-2xl bg-primary1 px-12 py-8 text-white shadow-2xl">
        <img
          src="./image/ilustration.png"
          alt="ilustration"
          className="absolute right-0 top-0 hidden h-full bg-cover lg:block"
        />
        <div className="flex flex-col gap-5">
          <h3
            className="w-full max-w-md text-2xl font-black md:text-3xl lg:text-4xl"
            style={{ lineHeight: 1.5 }}
          >
            Masih bingung cari tempat yang cocok? 🤔
          </h3>
          <p className="text-md w-full max-w-md leading-[1.8] text-white/80">
            Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
            tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
            berikan.
          </p>
          <Button
            variant="link"
            className="flex w-full max-w-fit items-center gap-3 p-0 text-lg text-white"
          >
            Mulai Sekarang <MoveRight className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </section>
  );
}
