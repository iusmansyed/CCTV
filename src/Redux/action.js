// actions.js
export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
export const SET_DATA = 'SET_DATA';
export const SET_COUNT_VALUE = 'SET_COUNT_VALUE';
export const SET_PREFERRED_CAMERA  = 'SET_PREFERRED_CAMERA ';
export const SET_ALL_VALUE  = 'SET_ALL_VALUE ';

export const setCurrentStep = (step) => ({
  type: SET_CURRENT_STEP,
  payload: step,
});
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setCountValue = (value) => ({
  type: SET_COUNT_VALUE,
  payload: value,
});
export const setPreferredCamera = (camera) => ({
  type: SET_PREFERRED_CAMERA,
  payload: camera,
});
export const allValue = (values) => ({
  type: SET_ALL_VALUE,
  payload: values,
});
