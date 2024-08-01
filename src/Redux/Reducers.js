import { combineReducers } from 'redux';

const initialStepState = 0;

const stepReducer = (state = initialStepState, action) => {
    switch (action.type) {
        case SET_CURRENT_STEP:
            return action.payload;
        default:
            return state;
    }
};
export default combineReducers({
    currentStep: stepReducer,
});