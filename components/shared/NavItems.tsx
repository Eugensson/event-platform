"use client";

import Link from "next/link";

import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col md:flex-row w-full md:items-center md:justify-between gap-5">
      {headerLinks.map(({ label, route }) => {
        const isActive = pathname === route;
        return (
          <li
            key={label}
            className={`${isActive && "text-blue-700"} whitespace-nowrap`}
          >
            <Link href={route}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
