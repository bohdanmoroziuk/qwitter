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
/* eslint-disable no-shadow */
/* eslint-disable no-console */

import database from 'boot/firebase';

export default {
  name: 'Home',
  data() {
    return {
      tweets: [],
    };
  },
  methods: {
    handleTweets() {
      database.collection('qweets')
        .orderBy('createdAt')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const tweet = {
              id: change.doc.id,
              ...change.doc.data(),
            };

            if (change.type === 'added') {
              this.tweets.unshift(tweet);
            }

            if (change.type === 'removed') {
              this.tweets = this.tweets.filter((tweet) => tweet.id !== change.doc.id);
            }
          });
        });
    },

    async addTweet(content) {
      const newTweet = {
        content,
        createdAt: Date.now(),
        fullname: 'Jordan Wild',
        nickname: '@jordan_wild',
      };

      try {
        await database.collection('qweets').add(newTweet);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTweet(id) {
      try {
        await database.collection('qweets').doc(id).delete();
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.handleTweets();
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
