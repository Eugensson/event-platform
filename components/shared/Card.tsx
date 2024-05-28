import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { FaRegEdit } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import { formatDateTime } from "@/lib/utils";
import { IEvent } from "@/lib/database/models/event.model";
import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

export const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-md bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex items-center justify-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500"
      />

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white/50 p-2 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <FaRegEdit className="w-5 h-5 text-gray-500" />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="text-[14px] font-semibold leading-[20px] w-min rounded-md bg-green-200 px-4 py-1 text-green-60">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            <p className="text-[14px] font-semibold leading-[20px] w-min rounded-md bg-gray-200 px-4 py-1 text-gray-600 line-clamp-1">
              {event.category.name}
            </p>
          </div>
        )}

        <p className="text-[16px] font-medium leading-[24px] md:text-[18px] md:font-medium md:leading-[28px] text-gray-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="text-[16px] font-medium leading-[24px] md:text-[20px] md:leading-[30px] line-clamp-2 flex-1 text-black">
            {event.title}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="text-[14px] font-medium leading-[20px] md:text-[16px]  md:leading-[24px] text-gray-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link
              href={`/orders?eventId=${event._id}`}
              className="flex items-center gap-2"
            >
              <p className="text-zinc-600">Order Details</p>
              <GoArrowUpRight className="w-5 h-5 text-gray-500" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
