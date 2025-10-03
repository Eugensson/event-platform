"use client";

import { useEffect, useMemo, useState } from "react";

import { TimeCircle } from "@/components/time-crcle";

import { Event } from "@/types";
import { getTimeParts } from "@/lib/utils";

interface TimerProps {
  event: Event;
}

export const Timer = ({ event }: TimerProps) => {
  const eventDate = useMemo(
    () => new Date(`${event.date}T${event.hour}`),
    [event.date, event.hour]
  );

  const [timeRemaining, setTimeRemaining] = useState(
    eventDate.getTime() - Date.now()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = eventDate.getTime() - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (timeRemaining <= 0) return <div>The event has already passed</div>;

  const timeParts = getTimeParts(timeRemaining);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {timeParts.map(({ label, value }) => (
        <TimeCircle key={label} label={label} value={value} />
      ))}
    </ul>
  );
};
