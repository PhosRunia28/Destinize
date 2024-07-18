import { testimonialUser } from "@/data/TestimonialData";
import TestimonialCard from "../Common/TestimonialCard";
import TitleCenter from "../Common/TitleCenter";

export default function TestimonialSection() {
  return (
    <section className="container pb-36 font-plusJakarta">
      <div className="flex flex-col gap-12">
        <TitleCenter
          subtitle="TESTIMONIAL DESTINIZE"
          title="💬 • Apa Kata Mereka Tentang Kami"
          description="Penasaran apa saja review dari pengguna yang memakai aplikasi dan website Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk cek dibawah!"
        />
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-start xl:gap-12">
          {testimonialUser.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
