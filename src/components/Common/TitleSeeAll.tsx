import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  subtitle: string;
  title: string;
  link: string;
};
export default function TitleSeeAll({ subtitle, title, link }: Props) {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
      <div className="space-y-2 font-manrope">
        <h5 className="text-sm font-black uppercase tracking-wide text-primary1 lg:text-base">
          {subtitle}
        </h5>
        <h3 className="text-2xl font-black sm:text-3xl lg:text-4xl">{title}</h3>
      </div>
      <a href={link}>
        <Button variant="link" className="flex gap-2 text-primary1">
          Lihat Semua <ChevronRight className="text-primary1" />
        </Button>
      </a>
    </div>
  );
}
