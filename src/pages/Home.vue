<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md">
        <new-tweet-form @submit="addTweet" />
      </div>

      <q-separator
        class="divider"
        size="10px"
        color="grey-2"
      />

      <tweet-list
        :tweets="tweets"
        @delete-tweet="deleteTweet"
      />
    </q-scroll-area>
  </q-page>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  name: 'Home',
  data() {
    return {
      tweets: [],
    };
  },
  methods: {
    addTweet(content) {
      const newTweet = {
        id: nanoid(),
        content,
        createdAt: new Date(),
        author: {
          fullname: 'Jordan Wild',
          nickname: '@jordan_wild',
        },
      };

      this.tweets = [newTweet, ...this.tweets];
    },
    deleteTweet(id) {
      this.tweets = this.tweets.filter((tweet) => tweet.id !== id);
    },
  },
  components: {
    TweetList: () => import('components/TweetList.vue'),
    NewTweetForm: () => import('components/NewTweetForm.vue'),
  },
};
</script>

<style lang="scss" scoped>
.divider {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: $grey-4;
}
</style>
