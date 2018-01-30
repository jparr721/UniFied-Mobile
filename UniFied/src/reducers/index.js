const initialState = {
  filterModalVisible: false,
  createPostModalVisible: false,
  newPostTitle: '',
  newPostPrice: '',
  newPostDescription: '',
  newPostCategory: 'Books',
  posts: [],
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_FILTER_MODAL':
      return {
        ...state, filterModalVisible: !state.filterModalVisible
      };
    case 'TOGGLE_CREATE_POST_MODAL':
      return {
        ...state, createPostModalVisible: !state.createPostModalVisible
      };
    case 'SAVE_NEW_POST_TITLE':
      return {
        ...state, newPostTitle: action.payload
      };
    case 'SAVE_NEW_POST_PRICE':
      return {
        ...state, newPostPrice: action.payload
      };
    case 'SAVE_NEW_POST_DESCRIPTION':
      return {
        ...state, newPostDescription: action.payload
      };
    case 'SAVE_NEW_POST_CATEGORY':
      return {
        ...state, newPostCategory: action.payload
      };
    case 'CLEAR_FIELDS':
      return {
        ...state,
        newPostTitle: '',
        newPostPrice: '',
        newPostDescription: '',
        newPostCategory: 'Books',
      };
    case 'ADD_POST_TO_FEED':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
}

export default appReducer;
