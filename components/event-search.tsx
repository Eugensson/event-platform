"use client";

import { useContext } from "react";
import { BiSearch } from "react-icons/bi";

import { Input } from "@/components/ui/input";
import { EventContext } from "@/components/event-context";

export const EventSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(EventContext);

  return (
    <div className="w-full xl:w-47.5 flex items-center gap-2.5">
      <div>
        <BiSearch size={18} className="text-accent" />
      </div>
      <Input
        type="text"
        placeholder="Event name or artist"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-0 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};
