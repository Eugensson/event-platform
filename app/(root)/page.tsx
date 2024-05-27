import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
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
            <Button
              asChild
              size="lg"
              className="w-full sm:w-fit rounded-md bg-blue-700 hover:bg-blue-800 transition-colors"
            >
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
          <p>Search</p>
          <p>CategoryFilter</p>
        </div>
      </section>
    </>
  );
}
