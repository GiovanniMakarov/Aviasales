/* eslint-disable default-param-last */
import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const pathOfInitialState = {
  tickets: initialState.tickets,
  id: initialState.id,
  loading: initialState.loading,
  error: initialState.error,
};

const reducerLoadTickets = (state = pathOfInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_ID:
      return {
        ...state,
        id: action.id,
      };

    case actionTypes.TICKETS_LOAD:
      return {
        ...state,
        // eslint-disable-next-line no-unsafe-optional-chaining
        tickets: [...state.tickets, ...action?.data],
        stop: action.stop,
        loading: action.loading,
      };

    case actionTypes.LOADING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionTypes.LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducerLoadTickets;
