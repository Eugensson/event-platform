"use client";

import { useContext } from "react";

import { Hero } from "@/components/hero";
import { EventList } from "@/components/event-list";
import { DownloadApp } from "@/components/download-app";
import { EventContext } from "@/components/event-context";
import { UpcommingEvents } from "@/components/upcomming-events";
import { RecommendedEvents } from "@/components/recommended-events";

const Home = () => {
  const { showEventList } = useContext(EventContext);

  return (
    <section>
      <Hero />
      {showEventList ? (
        <div className="container">
          <EventList />
        </div>
      ) : (
        <div>
          <div className="container">
            <UpcommingEvents />
            <DownloadApp />
            <RecommendedEvents />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
