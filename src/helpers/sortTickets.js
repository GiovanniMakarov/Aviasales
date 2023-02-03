/* eslint-disable no-unsafe-optional-chaining */
import sortNames from "../redux/sortNames";

export default function sortTickets(array, param) {
  const result = [...array];

  if (param === sortNames.cheapest) {
    return result.sort((firstTicket, secondTicket) => firstTicket.price - secondTicket.price);
  }

  if (param === sortNames.fastest) {
    return result.sort((firstTicket, secondTicket) => {
      return (
        firstTicket.segments[0]?.duration +
        firstTicket.segments[1]?.duration -
        (secondTicket.segments[0]?.duration + secondTicket.segments[1]?.duration)
      );
    });
  }

  if (param === sortNames.optimal) {
    return result.sort((firstTicket, secondTicket) => {
      return (
        firstTicket.segments[0]?.duration +
        firstTicket.segments[1]?.duration +
        firstTicket.price -
        (secondTicket.segments[0]?.duration + secondTicket.segments[1]?.duration + secondTicket.price)
      );
    });
  }

  return result;
}
