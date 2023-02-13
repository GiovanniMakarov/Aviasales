import { add, format } from "date-fns";

export default function getFlyTimesInOut(date, duration) {
  const dateOut = new Date(date);
  const dateIn = add(dateOut, { minutes: duration });
  return `${format(dateOut, "HH:mm")} - ${format(dateIn, "HH:mm")}`;
}
