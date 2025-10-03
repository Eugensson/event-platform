import Image from "next/image";
import { BiCalendar, BiTime, BiMap } from "react-icons/bi";

import { Event } from "@/types";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <article className="h-110 w-80 sm:w-full mx-auto sm:mx-0 p-4 flex flex-col justify-start bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-3xl">
      <div className="relative w-full h-80 mb-10">
        <Image
          src={event.img_sm}
          alt={event.title}
          fill
          className="object-cover rounded-2xl"
        />
        <div className="absolute -bottom-6 left-4 h-12 w-27.5 flex items-center justify-center text-[13px] uppercase font-medium rounded-full bg-accent">
          {event.type}
        </div>
      </div>

      <div className="pl-4 flex flex-col justify-between h-1/2">
        <div>
          <ul className="mb-2 flex items-center gap-3 text-accent">
            <li className="flex items-center gap-1">
              <BiCalendar />
              <div className="text-[15px]">{formatDate(event.date)}</div>
            </li>
            <li className="flex items-center gap-1">
              <BiTime />
              <div className="text-[15px]">{event.hour}</div>
            </li>
          </ul>
          <h4 className="h4">{event.title}</h4>
        </div>
        <div className="pb-2 flex items-center gap-2">
          <BiMap size={20} className="text-accent" />
          <p className="text-sm font-light text-white/70">{event.location}</p>
        </div>
      </div>
    </article>
  );
};
