import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
type Props = {
  tooltip: string;
  icon: React.ComponentType<{ className?: string }>;
  theme: "primary" | "muted";
};
export default function TooltipButton({ tooltip, icon: Icon, theme }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn("rounded-full bg-primary1 p-3", {
              "bg-primary1": theme === "primary",
              "bg-muted1": theme === "muted",
            })}
          >
            <Icon
              className={cn("h-5 w-5", {
                "text-white": theme === "primary",
                "text-primary1": theme === "muted",
              })}
            />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
