import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
type Props = {
  mobile?: boolean;
};
export default function LanguageCta({ mobile }: Props) {
  const [language, setLanguage] = useState("Bahasa Indonesia");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          className={cn("items-center gap-2", {
            "flex lg:hidden": mobile,
            "hidden lg:flex": !mobile,
          })}
        >
          <Globe className="h-5 w-5 text-lightgray" />
          <p className="text-sm text-lightgray lg:text-sm xl:text-[16px]">
            {language}
          </p>
          <ChevronDown className="h-5 w-5 text-lightgray" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setLanguage("Bahasa Indonesia")}>
          Bahasa Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("English")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
