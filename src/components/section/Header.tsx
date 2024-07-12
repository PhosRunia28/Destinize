import { ShoppingBasket, User } from "lucide-react";
import SearchInput from "../Common/SearchInput";
import TooltipButton from "../Common/TooltipButton";
import HeaderLogo from "../Header/HeaderLogo";
import LanguageCta from "../Header/LanguageCta";
import LocationCta from "../Header/LocationCta";
import NavDesktop from "../Header/NavDesktop";
import NavMobile from "../Header/NavMobile";
export default function Header() {
  return (
    <header className="py-4 font-plusJakarta">
      <div className="border-b border-verylightgray/50 pb-4">
        <div className="container flex justify-between gap-5">
          <HeaderLogo />
          <SearchInput />
          <LanguageCta />
          <LocationCta />
          {/* NavigationMenuMobile */}
          <nav className="md:hidden">
            <NavMobile />
          </nav>
        </div>
      </div>
      <div className="container flex flex-col gap-3 pt-4 lg:pt-0">
        <div className="flex flex-col items-center justify-center gap-7 sm:flex-row sm:justify-between">
          <LanguageCta mobile />
          <LocationCta mobile />
        </div>
        <div className="flex justify-center gap-6 pt-5 md:justify-between lg:items-center lg:pt-0">
          {/* NavigationMenuDesktop */}
          <NavDesktop />
          <div className="flex gap-3 md:items-center">
            <TooltipButton
              tooltip="Cart"
              icon={ShoppingBasket}
              theme="primary"
            />
            <TooltipButton tooltip="User Profile" icon={User} theme="muted" />
          </div>
        </div>
      </div>
    </header>
  );
}
