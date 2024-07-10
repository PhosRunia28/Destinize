import { cn } from "@/lib/utils";
import { ChevronDown, Globe } from "lucide-react";
type Props = {
  mobile?: boolean;
};
export default function LanguageCta({ mobile }: Props) {
  return (
    <button
      type="button"
      className={cn("items-center gap-2", {
        "flex lg:hidden": mobile,
        "hidden lg:flex": !mobile,
      })}
    >
      <Globe className="h-5 w-5 text-lightgray" />
      <p className="text-sm text-lightgray lg:text-sm xl:text-[16px]">
        Bahasa Indonesia
      </p>
      <ChevronDown className="h-5 w-5 text-lightgray" />
    </button>
  );
}
