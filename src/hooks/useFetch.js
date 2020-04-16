 
import React, { useEffect, useReducer } from 'react';
import { BASE_URL } from '../config/config';

const LOADING = 'LOADING';
const RESPONSE = 'RESPONSE';
const ERROR = 'ERROR';

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        result: null,
        loading: true,
        error: null,
      };
    case RESPONSE:
      return {
        result: action.payload.response,
        loading: false,
        error: null,
      };
    case ERROR:
      return {
        result: null,
        loading: false,
        error: action.payload.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
};

export const useFetch = (endpoint) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOADING });
    fetchData();

    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + endpoint);
        const { data } = await response.json();
        dispatch({ type: RESPONSE, payload: { response: data } });
      } catch (error) {
        dispatch({ type: ERROR, payload: { error } });
      }
    };
  }, [endpoint]);

  return [state.result, state.loading, state.error];
};