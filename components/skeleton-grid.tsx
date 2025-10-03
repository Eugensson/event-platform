// import { Skeleton } from "@/components/ui/skeleton";

// export const SkeletonGrid = ({ itemCount = 4 }: { itemCount: number }) => {
//   return (
//     <ul className="mb-32 grid grid-cols-1 xl:grid-cols-4 gap-7.5">
//       {Array.from({ length: Number(itemCount) }).map((_, i) => (
//         <li key={i} className="flex flex-col space-y-3">
//           <Skeleton className="h-56.25 rounded-xl" />
//           <div className="space-y-2">
//             <Skeleton className="h-4" />
//             <Skeleton className="h-4 w-50" />
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonGrid = ({ itemCount = 4 }: { itemCount: number }) => {
  return (
    <ul className="mb-32 grid grid-cols-1 xl:grid-cols-4 gap-7.5">
      {Array.from({ length: Number(itemCount) }).map((_, i) => (
        <li
          key={i}
          className="flex flex-col justify-start bg-white/5 p-4 rounded-3xl h-110 w-80 mx-auto sm:w-full"
        >
          <Skeleton className="relative h-80 w-full rounded-2xl mb-10" />

          <div className="flex flex-col justify-between h-1/2 pl-4">
            <div className="mb-2 space-y-2">
              <Skeleton className="h-4 w-3/4 rounded" />
              <Skeleton className="h-4 w-1/2 rounded" />
            </div>
            <Skeleton className="h-4 w-1/3 rounded" />
          </div>
        </li>
      ))}
    </ul>
  );
};
