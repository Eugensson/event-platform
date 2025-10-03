"use client";

import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect, useState } from "react";

import { EventCard } from "@/components/event-card";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { EventContext } from "@/components/event-context";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Event } from "@/types";

import "swiper/css";
import "swiper/css/pagination";

export const UpcommingEvents = () => {
  const { events } = useContext(EventContext);

  const [eventValue, setEventValue] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState<Event[] | []>([]);

  useEffect(() => {
    const filterEvents = () => {
      if (eventValue === "all") {
        setFilteredEvents(events as Event[]);
      } else {
        const results = events.filter(
          (event) => event.type.toLowerCase() === eventValue
        );
        setFilteredEvents(results as Event[]);
      }
    };

    filterEvents();
  }, [eventValue, events]);

  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <p className="pretitle">Upcoming</p>
        <h2 className="h2">Popular Events</h2>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-between mb-12">
        <Tabs
          value={eventValue}
          onValueChange={setEventValue}
          className="mb-12 xl:mb-0 h-full w-full max-w-150 flex items-center justify-center bg-none"
        >
          <TabsList className="h-full w-full flex flex-col lg:flex-row gap-6 bg-transparent">
            <TabsTrigger value="all" className="cursor-pointer">
              All
            </TabsTrigger>
            <TabsTrigger value="music" className="cursor-pointer">
              <Image
                src="/assets/upcoming/music.svg"
                width={18}
                height={18}
                alt="Note icon"
              />
              Music
            </TabsTrigger>
            <TabsTrigger value="art" className="cursor-pointer">
              <Image
                src="/assets/upcoming/art.svg"
                width={18}
                height={18}
                alt="Palette icon"
              />
              Art
            </TabsTrigger>
            <TabsTrigger value="food" className="cursor-pointer">
              <Image
                src="/assets/upcoming/food.svg"
                width={18}
                height={18}
                alt="Fork and knife icon"
              />
              Food
            </TabsTrigger>
            <TabsTrigger value="sport" className="cursor-pointer">
              <Image
                src="/assets/upcoming/sport.svg"
                width={18}
                height={18}
                alt="Ball icon"
              />
              Sport
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Link
          href="/"
          className="uppercase border-b-2 border-accent text-sm text-accent hover:text-accent-hover font-semibold transition-colors duration-300"
        >
          See all events
        </Link>
      </div>
      {filteredEvents.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ dynamicBullets: true, clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1310: { slidesPerView: 4 },
          }}
          className="w-full h-125"
        >
          {filteredEvents.map((event) => (
            <SwiperSlide key={event.id} className="select-none">
              <Link href={`/event/${event.id}`}>
                <EventCard event={event} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SkeletonGrid itemCount={4} />
      )}
    </section>
  );
};
