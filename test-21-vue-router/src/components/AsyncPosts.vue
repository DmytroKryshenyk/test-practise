<template>
  <div>
    <h3 posts-main-title>Блок, де асинхронно загрузим пости:</h3>
    <transition-group tag="ul" name="post-list" class="post-list">
      <li v-for="post in postList" :key="post.id" class="post-item">
        <h4>{{post.title}}</h4>
        <p>{{post.body}}</p>
      </li>
    </transition-group>
    <button
      v-if="postsDownloaded === 0"
      type="button"
      @click="downloadPost"
      class="download-btn"
    >Загрузити 5 постів</button>
    <button v-else type="button" @click="downloadPost" class="download-btn">Загрузити ще 5 постів</button>
  </div>
</template>
<script>
export default {
  name: "AsyncPosts",
  data() {
    return {
      postsDownloadStep: 5,
      postsDownloaded: 0
    };
  },
  computed: {
    postList() {
      return this.$store.getters["asyncPosts/postsList"];
    }
  },
  methods: {
    downloadPost() {
      this.$store.dispatch("asyncPosts/getPosts", {
        limit: this.postsDownloadStep + this.postsDownloaded,
        donloadedBefore: this.postsDownloaded
      });
      this.postsDownloaded += this.postsDownloadStep;
    }
  }
};
</script>

<style lang="scss" scoped>
.posts-main-title {
  font-family: arial, sans-serif;
}
.post-list {
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.post-list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.post-list-enter, .post-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.post-item {
  flex-basis: 45%;
  padding: 5px;
  border: 1px solid #424242;
  margin-top: 10px;

  &:nth-child(-n + 2) {
    margin-top: 0;
  }
}

.download-btn {
  background: #f0ce8e;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  display: block;
  margin: auto;
}
</style>