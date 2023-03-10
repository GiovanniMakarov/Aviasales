import sortNames from "../sortNames";
import fetchService from "../../service/service";

import actionTypes from "./actionTypes";

const toggleFilterByName = (filterName) => {
  return {
    type: actionTypes.TOGGLE_FILTER,
    payload: filterName,
  };
};

// eslint-disable-next-line consistent-return
const setSort = (name) => {
  if (name === sortNames.cheapest) {
    return {
      type: actionTypes.SET_SORT_CHEAPEST,
      payload: sortNames.cheapest,
    };
  }
  if (name === sortNames.fastest) {
    return {
      type: actionTypes.SET_SORT_FASTEST,
      payload: sortNames.fastest,
    };
  }
  if (name === sortNames.optimal) {
    return {
      type: actionTypes.SET_SORT_OPTIMAL,
      payload: sortNames.optimal,
    };
  }
};

const setSearchID = () => {
  return async (dispatch) => {
    const id = await fetchService.getSearchId();

    dispatch({
      type: actionTypes.SET_SEARCH_ID,
      id: id.searchId,
    });
  };
};

const ticketsLoad = (searchID) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING_START });

    let res = {};

    try {
      res = await fetchService.getPartOfTickets(searchID);
    } catch (err) {
      res = {
        tickets: [],
        stop: false,
      };
      dispatch({ type: actionTypes.LOADING_ERROR });
    }

    dispatch({
      type: actionTypes.TICKETS_LOAD,
      data: res.tickets,
      stop: res.stop,
      loading: !res.stop,
    });
  };
};

export { toggleFilterByName, setSort, ticketsLoad, setSearchID };
