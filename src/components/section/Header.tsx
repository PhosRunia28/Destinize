import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ALAM,
  EDUKASI,
  GUNUNG,
  KULINER,
  OUTBOUND,
  PANTAI,
  ROMANTIS,
  SEJARAH,
} from "@/data/NavigationMenu";
import { Menu, ShoppingBasket, User } from "lucide-react";
import HeaderLogo from "../ui/HeaderLogo";
import LanguageCta from "../ui/LanguageCta";
import LocationCta from "../ui/LocationCta";
import MenuItem from "../ui/MenuItem";
import SearchInput from "../ui/SearchInput";
import TooltipButton from "../ui/TooltipButton";
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
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-8 w-8" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-3 pt-4 lg:pt-0">
        <div className="flex flex-col items-center justify-center gap-7 sm:flex-row sm:justify-between">
          <LanguageCta mobile />
          <LocationCta mobile />
        </div>
        <div className="flex justify-center gap-6 pt-5 md:justify-between lg:items-center lg:pt-0">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="md:grid md:grid-cols-4 lg:flex">
              <MenuItem navLink={GUNUNG} />
              <MenuItem navLink={PANTAI} />
              <MenuItem navLink={KULINER} />
              <MenuItem navLink={OUTBOUND} />
              <MenuItem navLink={SEJARAH} />
              <MenuItem navLink={EDUKASI} />
              <MenuItem navLink={ROMANTIS} />
              <MenuItem navLink={ALAM} />
            </NavigationMenuList>
          </NavigationMenu>
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
