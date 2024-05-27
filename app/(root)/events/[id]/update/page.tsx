import { auth } from "@clerk/nextjs";

import { EventForm } from "@/components/shared/EventForm";

const UpdateEvent = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="py-5 md:py-10">
        <h3 className="wrapper font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] text-center sm:text-left ">
          Updated Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEvent;
