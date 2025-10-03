"use client";

import Link from "next/link";
import { useContext } from "react";

import { EventCard } from "@/components/event-card";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { EventContext } from "@/components/event-context";

export const EventList = () => {
  const { filteredEvents, isLoading, error } = useContext(EventContext);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (filteredEvents.length === 0 && !isLoading) {
    return (
      <div className="h-[80vh]">
        <p className="text-white/80 text-center">No events available</p>
      </div>
    );
  }

  if (isLoading) {
    return <SkeletonGrid itemCount={8} />;
  }

  return (
    <section>
      <h4 className="h4 mb-6">{filteredEvents.length} events found</h4>
      <ul className="mb-32 grid grid-cols-1 xl:grid-cols-4 gap-7.5">
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <Link href={`/event/${event.id}`}>
              <EventCard event={event} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
