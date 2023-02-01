import sortNames from "../sortNames";

const toggleFilterByName = (filterName) => {
  return {
    type: "TOGGLE_FILTER",
    payload: filterName,
  };
};

// eslint-disable-next-line consistent-return
const setSort = (name) => {
  if (name === sortNames.cheapest) {
    return {
      type: "SET_SORT_CHEAPEST",
      payload: sortNames.cheapest,
    };
  }
  if (name === sortNames.fastest) {
    return {
      type: "SET_SORT_FASTEST",
      payload: sortNames.fastest,
    };
  }
  if (name === sortNames.optimal) {
    return {
      type: "SET_SORT_OPTIMAL",
      payload: sortNames.optimal,
    };
  }
};

export { toggleFilterByName, setSort };
