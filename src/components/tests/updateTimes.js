export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = action.payload;
      if (selectedDate === '2025-12-25') {
        return ['17:00', '18:00'];
      }
      return initializeTimes();
    default:
      return state;
  }
};
