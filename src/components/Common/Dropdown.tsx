import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
type LinkData = {
  path: string;
  linkName: string;
};
type MenuData = {
  title: string;
  links: LinkData[];
};
type Props = {
  menu: MenuData;
};
export default function Dropdown({ menu }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mx-auto flex w-full max-w-fit gap-2">
        {menu.title} <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menu.links.map((link, index) => (
          <DropdownMenuItem key={index}>
            <a
              href={link.path}
              className="block h-full w-full text-sm no-underline"
            >
              {link.linkName}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
