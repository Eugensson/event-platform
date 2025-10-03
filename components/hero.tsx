"use client";

import { useContext } from "react";

import { SearchBar } from "@/components/search-bar";
import { EventContext } from "@/components/event-context";

export const Hero = () => {
  const { handleClearSearch } = useContext(EventContext);

  return (
    <section className="relative mb-16 h-screen xl:h-200">
      <div className="container h-full flex flex-col items-center justify-center pt-12 xl:pt-0">
        <div className="w-full max-w-171 mx-auto flex flex-col gap-2 text-center">
          <p className="pretitle">Uncover New Moments</p>
          <h1 className="h1">
            Discover Events <br /> & Expiriences
          </h1>
          <p className="mb-4 xl:mb-12 max-w-120 xl:max-w-none mx-auto text-sm xl:text-lg font-light text-white/80">
            Join a vibrant community where you can explore global happenings and
            share memorable moments with friends and family.
          </p>
        </div>
        <div>
          <SearchBar />
          <div className="relative w-full mt-3 flex flex-col justify-center">
            <p className="mb-3 xl:mb-0 text-sm italic font-light text-white/70 text-center">
              Please select at least one field or leave them empty to see all
              events.
            </p>
            <button
              type="button"
              onClick={handleClearSearch}
              className="xl:absolute right-0 text-sm cursor-pointer text-accent hover:text-accent-hover transition-colors duration-300"
            >
              Clear search
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 bg-primary top-0 left-0 w-[50vw] h-full bg-hero_1 bg-blend-color-dodge bg-no-repeat bg-cover opacity-50" />
      <div className="absolute -z-10 bg-primary top-0 right-0 w-[50vw] h-full bg-hero_2 bg-blend-lighten bg-no-repeat bg-cover opacity-50" />
    </section>
  );
};
