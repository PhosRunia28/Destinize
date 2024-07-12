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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import SearchInput from "../Common/SearchInput";
import Dropdown from "../Common/Dropdown";
export default function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex h-full flex-col justify-center gap-4">
          {/* DialogContent requires a DialogTitle for the component */}
          <VisuallyHidden>
            <SheetTitle>Menu Mobile</SheetTitle>
            <SheetDescription>
              This is the description of the Menu Mobile
            </SheetDescription>
          </VisuallyHidden>
          <Dropdown menu={ALAM} />
          <Dropdown menu={EDUKASI} />
          <Dropdown menu={GUNUNG} />
          <Dropdown menu={KULINER} />
          <Dropdown menu={OUTBOUND} />
          <Dropdown menu={PANTAI} />
          <Dropdown menu={ROMANTIS} />
          <Dropdown menu={SEJARAH} />
          <SearchInput mobile />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
