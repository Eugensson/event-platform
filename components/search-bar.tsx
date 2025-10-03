"use client";

import { useContext } from "react";
import { ArrowRight } from "lucide-react";

import { EventDate } from "@/components/event-date";
import { EventType } from "@/components/event-type";
import { EventSearch } from "@/components/event-search";
import { EventContext } from "@/components/event-context";
import { EventLocation } from "@/components/event-location";

export const SearchBar = () => {
  const { handleSubmit } = useContext(EventContext);

  return (
    <div className="w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-max h-auto xl:h-17.5 p-8 xl:pr-2 flex flex-col xl:flex-row items-center gap-6 mx-auto text-sm bg-white/5 rounded-3xl xl:rounded-full backdrop-blur-[20px] z-50">
      <EventSearch />
      <div className="border h-5 border-white/10 hidden xl:block" />
      <EventLocation />
      <div className="border h-5 border-white/10 hidden xl:block" />
      <EventDate />
      <div className="border h-5 border-white/10 hidden xl:block" />
      <EventType />
      <div className="border h-5 border-white/10 hidden xl:block" />
      <button
        type="button"
        className="w-full xl:w-13.5 xl:h-13.5 flex items-center justify-center btn-accent rounded-4xl xl:rounded-full cursor-pointer"
        onClick={handleSubmit}
      >
        <ArrowRight size={30} />
      </button>
    </div>
  );
};
