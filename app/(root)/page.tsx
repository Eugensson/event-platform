import Link from "next/link";
import Image from "next/image";

import { SearchParamProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/shared/Search";
import { getAllEvents } from "@/lib/actions/event.actions";
import { Collection } from "@/components/shared/Collection";
import { CategoryFilter } from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="py-5 md:py-10">
        <div className="wrapper grid gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px]">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="text-[20px] font-normal leading-[30px] tracking-[2%] md:text-[24px] md:leading-[36px]">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button asChild size="lg" className="w-full sm:w-fit h-[54px]">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="Hero images"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]">
          Trust by <br /> Thousands of Events
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <Search />
          <CategoryFilter />
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
