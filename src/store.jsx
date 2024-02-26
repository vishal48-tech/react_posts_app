import { createStore, action, thunk, computed } from "easy-peasy";
import api from "./Api/posts";

export default createStore({
  posts: [],
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),

  search: "",
  setSearch: action((state, payload) => {
    state.search = payload;
  }),

  title: "",
  setTitle: action((state, payload) => {
    state.title = payload;
  }),

  content: "",
  setContent: action((state, payload) => {
    state.content = payload;
  }),

  editTitle: "",
  setEditTitle: action((state, payload) => {
    state.editTitle = payload;
  }),

  editContent: "",
  setEditContent: action((state, payload) => {
    state.editContent = payload;
  }),

  search: "",
  setSearch: action((state, payload) => {
    state.search = payload;
  }),

  searchResults: computed((state) => {
    return state.posts.filter((post) => post.title.toLowerCase().includes(state.search.toLowerCase()));
  }),

  postCount: computed((state) => state.posts.length),
  getPostById: computed((state) => {
    return (id) => state.posts.find((post) => post.id.toString() === id);
  }),

  addPost: thunk(async (actions, newPost, helpers) => {
    const { posts } = helpers.getState();
    try {
      const response = await api.post("/posts", newPost);
      actions.setPosts([...posts, response.data]);
      actions.setTitle("");
      actions.setContent("");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }),

  deletePost: thunk(async (actions, id, helpers) => {
    const { posts } = helpers.getState();
    try {
      await api.delete(`/posts/${id}`);
      actions.setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }),

  editPost: thunk(async (actions, updatedPost, helpers) => {
    const { posts } = helpers.getState();
    const { id } = updatedPost;
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      actions.setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      actions.setEditTitle("");
      actions.setEditContent("");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  })

});
