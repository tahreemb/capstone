import { initializeTimes, updateTimes } from './updateTimes';

describe('initializeTimes', () => {
  it ('returns the default time slots', () => {
    const result = initializeTimes();
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

describe('updateTimes', () => {
  it ('returns holiday times for 2025-12-25', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2025-12-25' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(['17:00', '18:00']);
  });

  it ('returns default times for other dates', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2025-09-11' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});