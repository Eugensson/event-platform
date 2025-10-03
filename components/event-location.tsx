// "use client";

// import { useContext } from "react";
// import { BiMap } from "react-icons/bi";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectSeparator,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { EventContext } from "@/components/event-context";

// export const EventLocation = () => {
//   const { events, selectedLocation, setSelectedLocation } =
//     useContext(EventContext);

//   const uniqueLocations = [
//     "All locations",
//     ...new Set(
//       events
//         .filter((event) => {
//           const eventDate = new Date(event.date);
//           const currentDate = new Date();

//           if (eventDate > currentDate) return true;

//           if (eventDate.toDateString() === currentDate.toDateString()) {
//             const eventTime = eventDate.getTime();
//             const currentTime = currentDate.getTime();

//             return eventTime > currentTime;
//           }

//           return false;
//         })
//         .map((event) => event.location)
//     ),
//   ];

//   return (
//     <div className="w-full xl:w-47.5 flex items-center gap-2.5 select-none">
//       <div>
//         <BiMap size={20} className="text-accent" />
//       </div>
//       <Select
//         value={selectedLocation}
//         onValueChange={(value) => setSelectedLocation(value)}
//       >
//         <SelectTrigger className="pr-0 text-left bg-transparent border-none focus:ring-0 focus:ring-offset-0">
//           <SelectValue placeholder="Event location" />
//         </SelectTrigger>
//         <SelectContent className="max-h-100">
//           <SelectGroup>
//             <SelectLabel className="text-base">Locations</SelectLabel>
//             <SelectSeparator />
//             {uniqueLocations.map((location, index) => (
//               <SelectItem
//                 key={index}
//                 value={location === "All locations" ? null : location}
//               >
//                 {location}
//               </SelectItem>
//             ))}
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

"use client";

import { useContext } from "react";
import { BiMap } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EventContext } from "@/components/event-context";

export const EventLocation = () => {
  const { events, selectedLocation, setSelectedLocation } =
    useContext(EventContext);

  const uniqueLocations = [
    "All locations",
    ...new Set(
      events
        .filter((event) => {
          const eventDate = new Date(event.date);
          const now = new Date();

          if (eventDate > now) return true;
          if (eventDate.toDateString() === now.toDateString()) {
            return eventDate.getTime() > now.getTime();
          }
          return false;
        })
        .map((event) => event.location)
    ),
  ];

  return (
    <div className="w-full xl:w-47.5 flex items-center gap-1 select-none">
      <div>
        <BiMap size={20} className="text-accent" />
      </div>
      <Select
        value={selectedLocation ?? "All locations"}
        onValueChange={(value) =>
          setSelectedLocation(value === "All locations" ? null : value)
        }
      >
        <SelectTrigger className="pr-0 text-left bg-transparent border-none focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Event location" />
        </SelectTrigger>
        <SelectContent className="max-h-100">
          <SelectGroup>
            <SelectLabel className="text-base">Locations</SelectLabel>
            <SelectSeparator />
            {uniqueLocations.map((location, index) => (
              <SelectItem key={index} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
