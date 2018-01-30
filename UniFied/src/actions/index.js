import axios from 'axios';
export * from './FilterActions';

export const toggleFilterModal = () => {
  return {
    type: 'TOGGLE_FILTER_MODAL',
  }
};

export const toggleCreatePostModal = () => {
  return {
    type: 'TOGGLE_CREATE_POST_MODAL',
  }
};

export const submitPost = (config) => {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_CREATE_POST_MODAL' });
    axios.post('http://67.205.128.34/api/unified/post',
      {
        "title": config.title,
	      "price": config.price,
	      "description": config.description,
	      "user_name": "james@mail.gvsu.edu",
	      "category": config.category,
	      "is_live": true,
	      "school_name": "Grand Valley State University"
      }
    )
    .then((data) => {
      console.log(data);
      alert("Your post was created successfully!");
    })
    .catch((error) => {
      console.log(error);
      alert(error)
    });
    dispatch({type: 'CLEAR_FIELDS'});
  }
};

export const getAllPosts = () => {
  return (dispatch) => {
    axios.get('http://67.205.128.34/api/unified/posts')
    .then((data) => {
      console.log(data);
      for (key in data.data) {
        dispatch(addPostToFeed(data.data[key]));
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error)
    });
  }
};

export const addPostToFeed = (item) => {
  return {
    type: 'ADD_POST_TO_FEED',
    payload: item,
  }
};

export const saveNewPostTitle = (title) => {
  return  {
    type: 'SAVE_NEW_POST_TITLE',
    payload: title,
  }
};

export const saveNewPostPrice = (price) => {
  return {
    type: 'SAVE_NEW_POST_PRICE',
    payload: price,
  }
};

export const saveNewPostDescription = (description) => {
  return {
    type: 'SAVE_NEW_POST_DESCRIPTION',
    payload: description,
  }
};

export const saveNewPostCategory = (category) => {
  return {
    type: 'SAVE_NEW_POST_CATEGORY',
    payload: category,
  }
};
