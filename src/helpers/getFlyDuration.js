import { format, minutesToMilliseconds } from "date-fns";

export default function getFlyDuration(duration) {
  return format(new Date(minutesToMilliseconds(duration)), "HHч mmм");
}
