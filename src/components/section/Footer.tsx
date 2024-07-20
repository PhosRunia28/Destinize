import { ABOUT, FAQ, LINK_FOOTER_BOTTOM, SUPPORT } from "@/data/FooterMenu";
import { Locations } from "@/data/LocationData";
import FooterLink from "../Common/FooterLink";
import Locationinfo from "../Common/Locationinfo";
import ReadMore from "../Common/ReadMore";

export default function Footer() {
  return (
    <footer className="container pb-10 font-plusJakarta">
      <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
        <div className="flex w-full flex-col gap-5">
          <img
            src="./icon/footerLogo.svg"
            alt="footer logo"
            className="w-full max-w-8 bg-cover bg-center"
          />
          <h4 className="text-2xl font-bold">Destinize</h4>
          <ReadMore
            text="Destinize adalah sebuah website atau layanan aplikasi yang membantu kamu memilih atau merekomendasikan tempat-tempat yang dijuluki 'hidden gems' agar lebih dikenal dan ramai. Layanan ini bertujuan untuk memperkenalkan lokasi-lokasi wisata yang belum banyak diketahui orang, sehingga lebih banyak pengunjung dapat menikmati keindahan dan keunikan tempat-tempat tersebut."
            maxLength={174}
          />
          <div className="flex flex-col gap-6 py-4">
            {Locations.map((location, index) => (
              <Locationinfo location={location} key={`location-${index}`} />
            ))}
          </div>
          <p className="text-sm text-verylightgray">
            © 2021-{new Date().getFullYear()}, All Rights Reserved
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          <FooterLink menu={ABOUT} />
          <FooterLink menu={SUPPORT} />
          <FooterLink menu={FAQ} />
          <ul className="flex w-full flex-col items-center gap-5 sm:flex-row md:col-span-3 md:justify-center md:gap-8 lg:justify-between lg:gap-0">
            {LINK_FOOTER_BOTTOM.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-sm text-verylightgray transition hover:text-primary1"
                >
                  {link.linkName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
