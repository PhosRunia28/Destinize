import { cn } from "@/lib/utils";

type LinkData = {
  path: string;
  linkName: string;
};
type FooterMenu = {
  title: string;
  links: LinkData[];
};
type Props = {
  menu: FooterMenu;
  className?: string;
};
export default function FooterLink({ menu, className }: Props) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h5 className="text-lg font-bold tracking-wide">{menu.title}</h5>
      <ul className="flex flex-col gap-3">
        {menu.links.map((link, index) => (
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
  );
}
