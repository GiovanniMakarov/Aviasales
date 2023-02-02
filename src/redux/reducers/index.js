/* eslint-disable default-param-last */
import sortNames from "../sortNames";
import filterNames from "../filterNames";

const initialState = {
  tickets: [],
  sort: sortNames.fastest,
  transfers: {
    [filterNames.all]: false,
    [filterNames.noTransfers]: false,
    [filterNames.oneTransfers]: false,
    [filterNames.twoTranfers]: false,
    [filterNames.threeTransfers]: false,
  },
  id: null,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case "SET_SORT_CHEAPEST":
      return {
        ...state,
        sort: sortNames.cheapest,
      };
    case "SET_SORT_FASTEST":
      return {
        ...state,
        sort: sortNames.fastest,
      };
    case "SET_SORT_OPTIMAL":
      return {
        ...state,
        sort: sortNames.optimal,
      };

    case "TOGGLE_FILTER":
      if (action.payload === filterNames.all) {
        newState = {
          ...state,
          transfers: {
            [filterNames.all]: !state.transfers[filterNames.all],
            [filterNames.noTransfers]: !state.transfers[filterNames.all],
            [filterNames.oneTransfers]: !state.transfers[filterNames.all],
            [filterNames.twoTranfers]: !state.transfers[filterNames.all],
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
        newState.transfers[filterNames.twoTranfers] &&
        newState.transfers[filterNames.threeTransfers]
      ) {
        newState = {
          ...state,
          transfers: {
            [filterNames.all]: true,
            [filterNames.noTransfers]: true,
            [filterNames.oneTransfers]: true,
            [filterNames.twoTranfers]: true,
            [filterNames.threeTransfers]: true,
          },
        };
      }
      return newState;

    case "SET_SEARCH_ID":
      return {
        ...state,
        id: action.id,
      };

    case "TICKETS_LOAD":
      return {
        ...state,
        // eslint-disable-next-line no-unsafe-optional-chaining
        tickets: [...state.tickets, ...action?.data],
        stop: action.stop,
        loading: action.loading,
      };

    case "LOADING_START":
      return {
        ...state,
        loading: true,
        error: false,
      };

    case "LOADING_SUCCES":
      return {
        ...state,
        loading: false,
        error: false,
      };

    case "LOADING_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
