import { useReducer, useEffect } from 'react';
import type { ISkippData } from '../../interfaces';
type FilterState = {
  selectedSizes: number[];
  availableSizes: number[];
  filteredData: ISkippData[];
  originalData: ISkippData[]; 
};

type FilterAction =
  | { type: 'SET_SELECTED_SIZES'; payload: number[] }
  | { type: 'UPDATE_DATA'; payload: ISkippData[] };

const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_SELECTED_SIZES':
      const newSelectedSizes = action.payload;
      return {
        ...state,
        selectedSizes: newSelectedSizes,
        filteredData: newSelectedSizes.length === 0
          ? state.originalData 
          : state.originalData.filter(skip => 
              skip.size && newSelectedSizes.includes(skip.size)
          )};

    case 'UPDATE_DATA':
      const sizes = new Set<number>();
      action.payload?.forEach(skip => {
        if (skip.size) sizes.add(skip.size);
      });
      return {
        selectedSizes: [],
        availableSizes: Array.from(sizes).sort((a, b) => a - b),
        filteredData: action.payload,
        originalData: action.payload 
      };

    default:
      return state;
  }
};

export const useSkipFilter = (initialData: ISkippData[] = []) => {
  const [state, dispatch] = useReducer(filterReducer, {
    selectedSizes: [],
    availableSizes: [],
    filteredData: initialData,
    originalData: initialData
  }, (initialState) => {
    const sizes = new Set<number>();
    initialState.originalData?.forEach(skip => {
      if (skip.size) sizes.add(skip.size);
    });
    return {
      ...initialState,
      availableSizes: Array.from(sizes).sort((a, b) => a - b)
    };
  });

  useEffect(() => {
    dispatch({ type: 'UPDATE_DATA', payload: initialData });
  }, [initialData]);

  const handleFilterChange = (selectedSizes: number[]) => {
    dispatch({ type: 'SET_SELECTED_SIZES', payload: selectedSizes });
  };

  return {
    filteredData: state.filteredData,
    availableSizes: state.availableSizes,
    selectedSizes: state.selectedSizes,
    handleFilterChange,
    resetFilter: () => dispatch({ type: 'SET_SELECTED_SIZES', payload: [] }) 
  };
};