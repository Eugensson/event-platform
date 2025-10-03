import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

import { Timer } from "@/components/timer";
import { Organizers } from "@/components/organizers";
import { CustomSelect } from "@/components/custom-select";
import { BuyTicketBtn } from "@/components/buy-ticket-btn";
import { EventSchedule } from "@/components/event-schedule";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface EventDetailsPageProps {
  params: Promise<{ id: string }>;
}

const EventDetailsPage = async ({ params }: EventDetailsPageProps) => {
  const { id } = await params;

  const fetchEvent = async (id: string) => {
    const res = await fetch(`${baseUrl}/api/events/${id}`);

    if (!res.ok) {
      throw new Error("Event not found");
    }

    return await res.json();
  };

  const event = await fetchEvent(id);

  return (
    <section className="min-h-screen py-8 sm:py-48 flex items-center">
      <div className="container">
        <div className="w-full max-w-150 xl:max-w-none mx-auto">
          <div className="pt-28 pb-12 sm:py-0 xl:mb-24 flex flex-col xl:flex-row gap-8 xl:gap-24">
            <div className="relative mb-12 xl:mb-0 w-full h-80 xl:max-w-167.5 xl:h-125 rounded-2xl overflow-hidden">
              <Image
                src={event.img_lg}
                alt="Event image"
                fill
                className="object-cover mix-blend-lighten"
              />
            </div>
            <div className="w-full max-w-115 sm:mb-12 xl:mb-0 flex flex-1 flex-col justify-center gap-8">
              <div>
                <h2 className="h2 mb-4">{event.title}</h2>
                <EventSchedule event={event} />
              </div>
              <Timer event={event} />
              <CustomSelect event={event} />
              <BuyTicketBtn event={event} />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-24">
            <div className="w-full xl:max-w-167.5 flex flex-col gap-8 xl:gap-12">
              <p className="text-grey">{event.description}</p>
              <div>
                <h3 className="h3 mb-6">Requirements for the event</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <FaRegCircleCheck size={20} className="text-accent" />
                    <p className="text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaRegCircleCheck size={20} className="text-accent" />
                    <p className="text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaRegCircleCheck size={20} className="text-accent" />
                    <p className="text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaRegCircleCheck size={20} className="text-accent" />
                    <p className="text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full max-w-115">
              <Organizers event={event} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;
