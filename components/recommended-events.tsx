"use client";

import Link from "next/link";
import { useContext } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { EventCard } from "@/components/event-card";
import { EventContext } from "@/components/event-context";
import { SkeletonGrid } from "@/components/skeleton-grid";

import { Event } from "@/types";

import "swiper/css";
import "swiper/css/pagination";

export const RecommendedEvents = () => {
  const { events } = useContext(EventContext);

  const filterRecommendedEvents = events.filter((event) => event.recommended);

  return (
    <section className="mb-32">
      <div className="mb-12 text-center">
        <p className="pretitle">Recommended for you</p>
        <h2 className="h2">Events You Might Like</h2>
      </div>
      {filterRecommendedEvents.length > 0 ? (
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
          {filterRecommendedEvents.map((event: Event) => (
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
