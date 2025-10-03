import Link from "next/link";

import { socialsData } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="mb-18 mx-auto flex items-center gap-8">
      {socialsData.map(({ icon: Icon, path, name }) => {
        return (
          <li key={name}>
            <Link
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${name}`}
              className="hover:text-white/70 transition-colors duration-300"
            >
              <Icon size={28} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
