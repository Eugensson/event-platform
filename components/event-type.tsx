"use client";

import { useContext } from "react";
import { BiLayer } from "react-icons/bi";

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

export const EventType = () => {
  const { events, selectedType, setSelectedType } = useContext(EventContext);

  const uniqueTypes = [
    "All types",
    ...new Set(events.map((event) => event.type)),
  ];

  return (
    <div className="w-full xl:w-47.5 flex items-center gap-1 select-none">
      <div>
        <BiLayer size={20} className="text-accent" />
      </div>
      <Select
        value={selectedType ?? "All types"}
        onValueChange={(value) =>
          setSelectedType(value === "All types" ? null : value)
        }
      >
        <SelectTrigger className="pr-0 text-left bg-transparent border-none focus:ring-0 focus:ring-offset-0 capitalize">
          <SelectValue placeholder="Event type" />
        </SelectTrigger>
        <SelectContent className="max-h-100">
          <SelectGroup>
            <SelectLabel className="text-base">Type</SelectLabel>
            <SelectSeparator />
            {uniqueTypes.map((type, index) => (
              <SelectItem key={index} value={type} className="capitalize">
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
