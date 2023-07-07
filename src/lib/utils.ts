import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { DateTime } from "luxon";
import readingTime from "reading-time";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getReadingTime(text: string) {
  return readingTime(text).text;
}

export function getRelativeDate(date: string) {
  return DateTime.fromISO(date).toRelative();
}
