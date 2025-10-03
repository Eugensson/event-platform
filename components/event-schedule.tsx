import { Dot } from "lucide-react";
import { BiCalendar, BiMap } from "react-icons/bi";

import { Event } from "@/types";
import { formatDate } from "@/lib/utils";

interface EventScheduleProps {
  event: Event;
}

export const EventSchedule = ({ event }: EventScheduleProps) => {
  return (
    <div className="flex flex-col xl:flex-row items-start justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <BiCalendar size={24} className="text-accent" />
          <p>{formatDate(event.date)}</p>
        </div>
        <div className="flex items-center gap-2">
          <Dot size={30} />
          <p>{event.hour}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <BiMap size={24} className="text-accent" />
        <p>{event.location}</p>
      </div>
    </div>
  );
};
