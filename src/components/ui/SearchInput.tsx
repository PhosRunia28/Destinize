import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <form className="hidden w-full max-w-sm md:block xl:max-w-lg">
      <div className="relative">
        <Search className="absolute left-7 top-4 h-5 w-5 text-lightgray" />
        <input
          type="text"
          className="w-full rounded-full bg-verylightgray/20 px-14 py-4 text-sm placeholder:text-lightgray"
          placeholder="Cari apapun disini..."
        />
      </div>
    </form>
  );
}
