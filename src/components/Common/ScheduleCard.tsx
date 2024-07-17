import { Building, Leaf, Map, Send } from "lucide-react";

export default function ScheduleCard() {
  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col gap-6 rounded-2xl bg-white px-6 pb-8 pt-5 shadow-2xl">
      <img
        src="./image/reservation.png"
        alt="reservation"
        className="rounded-2xl bg-cover bg-center"
      />
      {/* schedule */}
      <div className="flex flex-col gap-4">
        <h6 className="text-xl font-bold">Liburan ke Bali</h6>
        <div className="flex gap-3">
          <p className="border-r pr-5 text-gray">14-29 Juni</p>
          <p className="text-gray">by Shandika</p>
        </div>
      </div>
      {/* cta group */}
      <div className="flex gap-5">
        <button className="group rounded-full bg-black/5 p-3 transition hover:bg-primary1">
          <Leaf className="h-4 w-4 text-gray group-hover:text-white" />
        </button>
        <button className="group rounded-full bg-black/5 p-3 transition hover:bg-primary1">
          <Map className="h-4 w-4 text-gray group-hover:text-white" />
        </button>
        <button className="group rounded-full bg-black/5 p-3 transition hover:bg-primary1">
          <Send className="h-4 w-4 text-gray group-hover:text-white" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <Building className="h-5 w-5 text-sm text-gray" />
        <p className="text-sm text-gray">12 Orang pergi bersama</p>
      </div>
      {/* ongoing mission */}
      <div className="bottom-[10%] left-[62%] flex w-full max-w-xs flex-col gap-4 rounded-xl border border-black/10 bg-white p-7 shadow-md sm:flex-row sm:gap-6 md:absolute lg:static xl:absolute">
        <img
          src="./image/flag.png"
          alt="flag"
          className="h-full max-h-16 w-full max-w-16 rounded-full bg-cover bg-center"
        />
        <div className="flex flex-col">
          <h6 className="text-sm text-gray">Ongoing</h6>
          <h5 className="pb-4 pt-1 text-xl font-bold">Jelajah Indonesia</h5>
          <div className="flex flex-col gap-2">
            <p className="">
              <span className="text-primary1">40%</span> complete
            </p>
            <div className="relative h-2 w-full rounded-full bg-black/5">
              <div className="absolute inset-0 h-2 w-[40%] rounded-full bg-primary1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
