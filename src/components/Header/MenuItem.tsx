import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
type LinkData = {
  path: string;
  linkName: string;
};
type NavLinkData = {
  title: string;
  links: LinkData[];
};
type Props = {
  navLink: NavLinkData;
};
export default function MenuItem({ navLink }: Props) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-verylightgray">
        {navLink.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="flex w-full flex-col">
        <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-2 lg:w-[500px]">
          {navLink.links.map((link, index) => (
            <li className="" key={index}>
              <NavigationMenuLink asChild>
                <a
                  href={link.path}
                  className="block rounded-lg border border-black p-3 text-sm no-underline transition-colors hover:bg-gray hover:text-white"
                >
                  {link.linkName}
                </a>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
