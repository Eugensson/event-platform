import Link from "next/link";
import Image from "next/image";

import { Event } from "@/types";

interface OrganizersProps {
  event: Event;
}

export const Organizers = ({ event }: OrganizersProps) => {
  return (
    <div className="py-8 px-6 md:px-12 xl:px-16 w-full flex flex-col gap-8 rounded-2xl bg-secondary">
      <div>
        <h3 className="h3 mb-4">Organizers</h3>
        <div className="w-18.5 h-0.75 bg-accent rounded-3xl" />
      </div>
      <ul className="space-y-8">
        {event.organizers.map(({ img_avatar, name, job, social }, index) => (
          <li
            key={index}
            className="pb-8 flex items-center gap-8 border-b border-white/10 last-of-type:border-none"
          >
            <Image src={img_avatar} alt={name} width={72} height={72} />
            <div className="space-y-2">
              <h4 className="text-lg font-medium">{name}</h4>
              <p className="text-accent">{job}</p>
              <ul className="flex items-center gap-4">
                {social.map(({ icon, path }, index) => (
                  <li key={index}>
                    <Link
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Link to ${name}`}
                      className="hover:text-white/70 transition-colors duration-300"
                    >
                      <Image src={icon} alt={name} width={20} height={20} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
