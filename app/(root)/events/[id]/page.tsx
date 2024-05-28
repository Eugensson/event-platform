import Image from "next/image";
import { IoLocationOutline, IoCalendarNumberOutline } from "react-icons/io5";

import { SearchParamProps } from "@/types";
import { formatDateTime } from "@/lib/utils";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { Collection } from "@/components/shared/Collection";
import { CheckoutButton } from "@/components/shared/CheckoutButton";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <section className="flex justify-center bg-contain">
        <div className="grid md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="Event banner"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]">
                {event.title}
              </h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="font-bold text-[20px] leading-[30px] tracking-[2%] rounded-md bg-green-500/10 px-5 py-2 text-green-700">
                    {event.isFree ? "FREE" : `$${event.price}`}
                  </p>
                  <p className="text-[16px] font-medium leading-[24px] rounded-md bg-gray-500/10 px-4 py-2.5 text-gray-500">
                    {event.category.name}
                  </p>
                </div>

                <p className="text-[18px] font-medium leading-[28px] ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-green-700">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>

            <CheckoutButton event={event} />

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <IoCalendarNumberOutline className="w-6 h-6 text-green-700" />
                <div className="text-[16px] font-medium leading-[24px] lg:p-regular-20 flex flex-wrap items-center gap-2">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  /
                  <p>
                    {formatDateTime(event.endDateTime).dateOnly} -{" "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="text-[20px] font-normal leading-[30px] tracking-[2%] flex items-center gap-3">
                <IoLocationOutline className="w-6 h-6 text-green-700" />
                <p className="text-[16px] font-medium leading-[24px] lg:text-[20px] lg:font-normal lg:leading-[30px] lg:tracking-[2%]">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-[20px] leading-[30px] tracking-[2%] text-gray-600">
                What You&apos;ll Learn:
              </p>
              <p className="text-[16px] font-medium leading-[24px] lg:text-[18px] lg:font-normal lg:leading-[28px] lg:tracking-[2%]">
                {event.description}
              </p>
              <p className="text-[16px] font-medium leading-[24px] lg:text-[18px] lg:font-normal lg:leading-[28px] lg:tracking-[2%] truncate underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]">
          Related Events
        </h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
