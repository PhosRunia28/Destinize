import { Airlines } from "@/data/Airllines";

export default function AirlinesSection() {
  return (
    <section className="container pb-14 lg:-mt-24">
      <div className="grid auto-rows-[150px] grid-cols-1 items-center justify-between justify-items-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:flex">
        {Airlines.map((airline, index) => (
          <img
            key={`airline ${index}`}
            src={airline}
            alt={`airline ${index}`}
            className="mx-auto w-full max-w-[10rem] bg-cover bg-center"
          />
        ))}
      </div>
    </section>
  );
}
