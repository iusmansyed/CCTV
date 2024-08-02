import { combineReducers } from 'redux';
import { SET_CURRENT_STEP, SET_DATA, SET_COUNT_VALUE, SET_PREFERRED_CAMERA, allValue, SET_ALL_VALUE } from './action';

const initialStepState = {
  currentStep: 0
};

const stepReducer = (state = initialStepState, action) => {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return { currentStep: action.payload }
    default:
      return state;
  }
};
const initialDataState = {
  data: null,
  PreferredCamera: [],
  cameraCount: '',
  // add more properties as needed
};
const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case SET_PREFERRED_CAMERA:
      return {
        ...state,
        PreferredCamera: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_COUNT_VALUE:
      return {
        ...state,
        cameraCount: action.payload,
      };
    // add more cases as needed
    default:
      return state;
  }
};

const initialState = {
  forms: {
    fullName: "",
    email: "",
    contact: "",
    postal: "",
    address: "",
    service: "",
    sector: "",
  },
};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_VALUE:
      return {
        ...state,
        forms: {
          ...state.forms,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export default combineReducers({
  currentStep: stepReducer,
  setData: dataReducer,
  formData: formDataReducer
});