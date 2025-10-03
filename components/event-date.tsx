"use client";

import { format } from "date-fns";
import { useContext } from "react";
import { BiCalendar, BiChevronDown } from "react-icons/bi";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { EventContext } from "@/components/event-context";

export const EventDate = () => {
  const { selectedDate, setSelectedDate } = useContext(EventContext);

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(format(date, "yyyy-MM-dd"));
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div className="w-full xl:w-47.5 flex items-center gap-1 select-none">
      <BiCalendar size={20} className="text-accent" />
      <Popover>
        <PopoverTrigger
          asChild
          className="justify-start bg-transparent hover:bg-transparent border-none"
        >
          <Button className="[&_svg:not([class*='size-'])]:size-6">
            {selectedDate ? (
              format(new Date(selectedDate), "PPP")
            ) : (
              <span>Pick a date</span>
            )}
            <BiChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-secondary border-0 text-white">
          <Calendar
            mode="single"
            selected={selectedDate ? new Date(selectedDate) : undefined}
            onSelect={handleDateChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
