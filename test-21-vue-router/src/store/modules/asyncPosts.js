import axios from "axios";

export default {
  namespaced: true,
  state: {
    posts: [],
    apiUrl: "https://jsonplaceholder.typicode.com/posts"
  },
  getters: {
    postsList(state) {
      return state.posts;
    }
  },
  mutations: {
    updatePosts(state, newPosts) {
      state.posts = [...state.posts, ...newPosts];
    }
  },
  actions: {
    getPosts({ state, commit }, payloads) {
      axios
        .get(`${state.apiUrl}?_limit=${payloads.limit}`)
        .then(response => response.data)
        .then(data => {
          const startIndex = payloads.donloadedBefore === 0 ? 0 : payloads.donloadedBefore - 1;
          const endIndex = startIndex + 5;
          const newPosts = data.slice(startIndex, endIndex);
          commit("updatePosts", newPosts);
        });
    }
  }
};
