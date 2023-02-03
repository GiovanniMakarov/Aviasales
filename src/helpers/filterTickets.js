/* eslint-disable consistent-return */
import filterNames from "../redux/filterNames";

export default function filterTickets(tickets, filters) {
  let result = [];

  const keys = Object.keys(filters);

  keys.forEach((key) => {
    if (filters[key] === true) {
      if (key === filterNames.noTransfers) {
        const arr = tickets.filter((el) => el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0);
        result = [...result, ...arr];
      }
      if (key === filterNames.oneTransfers) {
        const arr = tickets.filter(
          (el) =>
            (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 1) ||
            (el.segments[0].stops.length === 1 && el.segments[1].stops.length === 0) ||
            (el.segments[0].stops.length === 1 && el.segments[1].stops.length === 1)
        );
        result = [...result, ...arr];
      }
      if (key === filterNames.twoTranfers) {
        const arr = tickets.filter(
          (el) =>
            (el.segments[0].stops.length === 2 && el.segments[1].stops.length <= 2) ||
            (el.segments[0].stops.length <= 2 && el.segments[1].stops.length === 2)
        );
        result = [...result, ...arr];
      }
      if (key === filterNames.threeTransfers) {
        const arr = tickets.filter(
          (el) =>
            (el.segments[0].stops.length === 3 && el.segments[1].stops.length <= 3) ||
            (el.segments[0].stops.length <= 3 && el.segments[1].stops.length === 3)
        );
        result = [...result, ...arr];
      }
      if (key === filterNames.all) {
        return filters;
      }
    }
  });

  return result;
}
