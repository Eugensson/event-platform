"use client";

import { PiChairFill } from "react-icons/pi";
import { useContext, useEffect } from "react";

import { TicketContext } from "@/components/ticket-context";

import { Event } from "@/types";

interface CustomSelectProps {
  event: Event;
}

export const CustomSelect = ({ event }: CustomSelectProps) => {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error("TicketContext must be used within a TicketProvider");
  }

  const { seat, showMenu, setShowMenu, handleSeat, initializeEvent } = context;

  useEffect(() => {
    initializeEvent(event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={(e) => {
        setShowMenu(!showMenu);
        e.stopPropagation();
      }}
      className="relative w-full h-16 px-8 flex items-center justify-between rounded-full custom-select bg-secondary cursor-pointer select-none"
    >
      <div className="w-full flex items-center gap-2">
        <PiChairFill size={20} className="text-accent" />
        <div className="w-full flex items-center justify-between">
          <div className="flex-1 capitalize">{seat.seat}</div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">${seat.price}</p>
            <p className="text-sm text-white/60">each</p>
          </div>
        </div>
      </div>
      {showMenu && (
        <ul className="absolute top-17.5 left-0 w-full h-50 overflow-hidden rounded-3xl bg-secondary">
          {event.seats.map(({ seat, price }) => (
            <li
              key={seat}
              className="px-8 py-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors duration-300"
              onClick={(e) => {
                handleSeat(seat, price);
                e.stopPropagation();
              }}
            >
              <p className="capitalize">{seat}</p>
              <p>${price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
