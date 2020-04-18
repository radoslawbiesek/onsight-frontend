import { useEffect, useReducer } from 'react';
import { BASE_URL } from '../config/config';

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const actionTypes = {
  LOADING: 'LOADING',
  RESPONSE: 'RESPONSE',
  ERROR: 'ERROR',
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.RESPONSE:
      return {
        result: action.payload.response,
        loading: false,
        error: null,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const useFetch = (endpoint, initialState = { result: null }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.LOADING });
    fetchData();

    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + endpoint);
        const { data } = await response.json();
        dispatch({ type: actionTypes.RESPONSE, payload: { response: data } });
      } catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: { error } });
      }
    }
  }, [endpoint]);

  return [state.result, state.loading, state.error];
};
