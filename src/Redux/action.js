// actions.js
export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';

export const setCurrentStep = (step) => ({
  type: SET_CURRENT_STEP,
  payload: step,
});
