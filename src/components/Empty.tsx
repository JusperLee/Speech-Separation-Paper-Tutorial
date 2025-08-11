import { cn } from "@/lib/utils";

// Empty component
export default function Empty() {
  return (
    <div className={cn("flex h-full items-center justify-center")}>No Data</div>
  );
}