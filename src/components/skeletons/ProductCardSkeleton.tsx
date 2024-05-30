import { Skeleton } from "../ui/skeleton"

export default function ProductCardSkeleton() {
   return (
      <div className="flex flex-col h-full w-full gap-2 border border-secondary p-2">
         <Skeleton className="h-full aspect-square w-full rounded-xl" />
         <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-8 w-2/4" />
            <Skeleton className="h-3 w-1/4" />
         </div>
         <div className="mt-7 flex items-center gap-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
         </div>
      </div>
   )
}