const initialState = {
  filterModalVisible: false,
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_FILTER_MODAL':
      return {
        ...state, filterModalVisible: !state.filterModalVisible
      };
    default:
      return state;
  }
}

export default appReducer;
