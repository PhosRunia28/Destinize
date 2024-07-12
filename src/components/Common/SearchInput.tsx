import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
type Props = {
  mobile?: boolean;
};
export default function SearchInput({ mobile }: Props) {
  return (
    <form
      className={cn("w-full max-w-sm xl:max-w-lg", {
        "md:hidden": mobile,
        "hidden md:block": !mobile,
      })}
    >
      <div className="relative">
        <Search
          className={cn("absolute h-5 w-5 text-lightgray", {
            "left-4 top-3": mobile,
            "left-7 top-4": !mobile,
          })}
        />
        <input
          type="text"
          className={cn(
            "w-full rounded-full bg-verylightgray/20 text-sm placeholder:text-lightgray",
            {
              "px-12 py-3": mobile,
              "px-14 py-4": !mobile,
            },
          )}
          placeholder="Cari apapun disini..."
        />
      </div>
    </form>
  );
}
