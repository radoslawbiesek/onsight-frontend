import { useReducer, useCallback } from 'react';

const actionTypes = {
  ADD_FILTER: 'ADD_FILTER',
  RESET_FILTERS: 'RESET_FILTERS',
  REMOVE_FILTER: 'REMOVE_FILTER',
  SET_PRICES: 'SET_PRICES',
};

function filterReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_FILTER: {
      const { filterType, filterValue } = action.payload;

      if (!state[filterType]) {
        return {
          ...state,
          [filterType]: [filterValue],
        };
      }

      if (state[filterType].includes(filterValue)) {
        return { ...state };
      }

      return {
        ...state,
        [filterType]: [...state[filterType], filterValue],
      };
    }

    case actionTypes.REMOVE_FILTER: {
      const { filterType, filterValue } = action.payload;
      const filteredFilters = state[filterType].filter(
        (item) => item !== filterValue
      );

      if (!filteredFilters.length) {
        const { [filterType]: deleted, ...filteredState } = state;
        return filteredState;
      }

      return {
        ...state,
        [filterType]: filteredFilters,
      };
    }

    case actionTypes.SET_PRICES:
      const { priceMin, priceMax } = action.payload;

      return {
        ...state,
        priceMin,
        priceMax,
      };

    case actionTypes.RESET_FILTERS: {
      return {};
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const useFilters = () => {
  const [state, dispatch] = useReducer(filterReducer, {});

  const addFilter = useCallback(
    (filterType, filterValue) => {
      dispatch({
        type: actionTypes.ADD_FILTER,
        payload: {
          filterType,
          filterValue,
        },
      });
    },
    [dispatch]
  );

  const removeFilter = useCallback(
    (filterType, filterValue) => {
      dispatch({
        type: actionTypes.REMOVE_FILTER,
        payload: {
          filterType,
          filterValue,
        },
      });
    },
    [dispatch]
  );

  const resetFilters = useCallback(() => {
    dispatch({
      type: actionTypes.RESET_FILTERS,
    });
  }, [dispatch]);

  const setPrice = useCallback(
    (priceMin, priceMax) => {
      dispatch({
        type: actionTypes.SET_PRICES,
        payload: {
          priceMin,
          priceMax,
        },
      });
    },
    [dispatch]
  );

  return { state, addFilter, removeFilter, resetFilters, setPrice };
};
