import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

export const formatNumber = (num: number) => String(num).padStart(2, "0");

export const getTimeParts = (timeRemaining: number) => {
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return [
    { label: "days", value: formatNumber(days) },
    { label: "hours", value: formatNumber(hours) },
    { label: "minutes", value: formatNumber(minutes) },
    { label: "seconds", value: formatNumber(seconds) },
  ] as const;
};
