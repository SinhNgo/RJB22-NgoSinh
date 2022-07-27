// DEFAULT STATE
const defaultState = {
  count: 0,
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "tang":
      const newCount = state.count + action.number;
      return { ...state, count: newCount };
    case "giam":
      return Object.assign({}, state, {
        count: state.count - action.number,
      });
    default:
      return state;
  }
};

export default counterReducer;
