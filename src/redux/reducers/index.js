/* eslint-disable default-param-last */
import { combineReducers } from "redux";

import reducerLoadTickets from "./reducerLoadTickets";
import reducerSortAndFilter from "./reducerSortAndFilter";

const reducer = combineReducers({
  service: reducerLoadTickets,
  filter: reducerSortAndFilter,
});

export default reducer;
