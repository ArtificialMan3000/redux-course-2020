import {
  INCREMENT,
  DECREMENT,
  TOGGLE_THEME,
  MIDDLEWARE_LOG,
  LOG,
} from './actionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case INCREMENT: {
      state = { ...state, count: state.count + 1 };
      return state;
    }
    case DECREMENT: {
      state = { ...state, count: state.count - 1 };
      return state;
    }
    case TOGGLE_THEME: {
      state = { ...state, isDark: !state.isDark };
      return state;
    }
    case MIDDLEWARE_LOG: {
      state = { ...state, log: payload };
      return state;
    }
    case LOG: {
      state = { ...state, log: payload };
      return state;
    }
    default: {
      return state;
    }
  }
};

export { reducer };
