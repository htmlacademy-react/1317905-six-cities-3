import { describe, it, expect } from 'vitest';
import uiReducer, { changeCity, setSorting, setError } from './ui-slice';

describe('ui-slice', () => {
  const initialState = {
    city: 'Paris',
    sorting: 'popular',
    error: null,
  };

  it('should return initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle changeCity', () => {
    const newState = uiReducer(initialState, changeCity('Amsterdam'));
    expect(newState.city).toBe('Amsterdam');
  });

  it('should handle setSorting', () => {
    const newState = uiReducer(initialState, setSorting('priceLowToHigh'));
    expect(newState.sorting).toBe('priceLowToHigh');
  });

  it('should handle setError', () => {
    const newState = uiReducer(initialState, setError('Something went wrong'));
    expect(newState.error).toBe('Something went wrong');
  });
});
