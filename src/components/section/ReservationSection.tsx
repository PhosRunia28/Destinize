import ReservationText from "../Common/ReservationText";
import ScheduleCard from "../Common/ScheduleCard";

export default function ReservationSection() {
  return (
    <section className="container pb-36 font-plusJakarta">
      <div className="flex flex-col gap-14 sm:mx-auto sm:w-full sm:max-w-fit lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h5 className="font-manrope text-sm font-black uppercase tracking-widest text-primary1 lg:text-base">
              RESERVASI TEMPAT
            </h5>
            <h3
              className="max-w-md text-3xl font-black sm:text-4xl lg:text-5xl"
              style={{ lineHeight: 1.3 }}
            >
              Gak mau ngantri? reservasi aja! 🤙🏻
            </h3>
          </div>
          <div className="flex flex-col gap-10">
            <ReservationText
              icon="🔎"
              title="Cari tempat yang kamu mau"
              subtitle="Temukan destinasi selanjutnya yang akan kamu kunjungi dengan
                    Destinize"
            />
            <ReservationText
              icon="✏"
              title="Isi data dan konfirmasi pembayaran"
              subtitle="Tulis dan lengkapi data kamu untuk keperluan data booking"
            />
            <ReservationText
              icon="😍"
              title="Tinggal masuk dan enjoy!"
              subtitle="Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan"
            />
          </div>
        </div>
        <ScheduleCard />
      </div>
    </section>
  );
}
