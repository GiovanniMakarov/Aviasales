import filterNames from "./filterNames";
import sortNames from "./sortNames";

const initialState = {
  tickets: [],
  sort: sortNames.cheapest,
  transfers: {
    [filterNames.all]: true,
    [filterNames.noTransfers]: true,
    [filterNames.oneTransfers]: true,
    [filterNames.twoTransfers]: true,
    [filterNames.threeTransfers]: true,
  },
  id: null,
  loading: false,
  error: false,
};

export default initialState;
