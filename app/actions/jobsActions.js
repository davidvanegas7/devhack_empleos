import { assign } from 'lodash';

// Acciones que envian su informacion al reducer
const receivePosts = (posts) => (
  {
    type: 'RECEIVE_POSTS',
    posts,
  }
);

export const refreshPosts = () => (
  {
    type: 'REFRESH_POSTS',
  }
);

export const togglePostsLoading = () => ({
  type: 'TOGGLE_POSTS_LOADING',
});

// Acciones que se exportan para ser usadas en las clases de React
export function createPost(post) {
  return (dispatch) => {
    dispatch(togglePostsLoading());
    return fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, post)),
    })
    .then(() => {
      dispatch(togglePostsLoading());
      dispatch(refreshPosts());
      // dispatch(receiveCreatePost(response))
    });
  };
}

export function editPost(post) {
  return (dispatch) => {
    dispatch(togglePostsLoading());
    return fetch(`http://localhost:3000/jobs/${post._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, post)),
    })
    .then(() => {
      dispatch(togglePostsLoading());
      dispatch(refreshPosts());
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    dispatch(togglePostsLoading());
    return fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      dispatch(togglePostsLoading());
      dispatch(refreshPosts());
    });
  };
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(togglePostsLoading());
    return fetch('http://localhost:3000/jobs', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receivePosts(json));
      dispatch(togglePostsLoading());
    });
  };
}
