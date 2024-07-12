import { cn } from "@/lib/utils";
import { ChevronDown, MapPin } from "lucide-react";
type Props = {
  mobile?: boolean;
};
export default function LocationCta({ mobile }: Props) {
  return (
    <div
      className={cn("items-center gap-3", {
        "hidden lg:flex": !mobile,
        "flex lg:hidden": mobile,
      })}
    >
      <div className="rounded-full bg-muted1 p-3">
        <MapPin className="h-5 w-5 text-primary1" />
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-verylightgray">Lokasi</p>
        <button
          type="button"
          className="flex items-center gap-2 text-[16px] font-bold leading-tight text-primary1 lg:text-sm xl:text-[16px]"
        >
          Indonesia, Yogyakarta
          <ChevronDown className="h-5 w-5 text-primary1" />
        </button>
      </div>
    </div>
  );
}
