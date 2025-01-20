import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 h-[600px]">
      <Skeleton className="h-[50%] w-[100%] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  );
}
