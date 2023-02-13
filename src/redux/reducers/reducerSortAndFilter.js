/* eslint-disable default-param-last */
import sortNames from "../sortNames";
import filterNames from "../filterNames";
import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const reducerSortAndFilter = (state = { sort: initialState.sort, transfers: initialState.transfers }, action) => {
  let newState = state;

  switch (action.type) {
    case actionTypes.SET_SORT_CHEAPEST:
      return {
        ...state,
        sort: sortNames.cheapest,
      };
    case actionTypes.SET_SORT_FASTEST:
      return {
        ...state,
        sort: sortNames.fastest,
      };
    case actionTypes.SET_SORT_OPTIMAL:
      return {
        ...state,
        sort: sortNames.optimal,
      };

    case actionTypes.TOGGLE_FILTER:
      if (action.payload === filterNames.all) {
        newState = {
          ...state,
          transfers: {
            [filterNames.all]: !state.transfers[filterNames.all],
            [filterNames.noTransfers]: !state.transfers[filterNames.all],
            [filterNames.oneTransfers]: !state.transfers[filterNames.all],
            [filterNames.twoTransfers]: !state.transfers[filterNames.all],
            [filterNames.threeTransfers]: !state.transfers[filterNames.all],
          },
        };
      } else if (action.payload !== filterNames.all) {
        if (state.transfers[action.payload] && state.transfers[filterNames.all] === true) {
          newState = {
            ...state,
            transfers: {
              ...state.transfers,
              [filterNames.all]: false,
              [action.payload]: !state.transfers[action.payload],
            },
          };
        } else {
          newState = {
            ...state,
            transfers: {
              ...state.transfers,
              [action.payload]: !state.transfers[action.payload],
            },
          };
        }
      }

      if (
        newState.transfers[filterNames.noTransfers] &&
        newState.transfers[filterNames.oneTransfers] &&
        newState.transfers[filterNames.twoTransfers] &&
        newState.transfers[filterNames.threeTransfers]
      ) {
        newState = {
          ...state,
          transfers: {
            [filterNames.all]: true,
            [filterNames.noTransfers]: true,
            [filterNames.oneTransfers]: true,
            [filterNames.twoTransfers]: true,
            [filterNames.threeTransfers]: true,
          },
        };
      }
      return newState;

    default:
      return state;
  }
};

export default reducerSortAndFilter;
