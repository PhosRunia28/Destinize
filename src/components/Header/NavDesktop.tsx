import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
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
import MenuItem from "./MenuItem";
export default function NavDesktop() {
  return (
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
  );
}
