<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
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
        @like-tweet="likeTweet"
        @delete-tweet="deleteTweet"
      />
    </q-scroll-area>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState('tweets', ['tweets']),
  },
  methods: {
    ...mapActions('tweets', [
      'addTweet',
      'likeTweet',
      'deleteTweet',
      'subscribe',
    ]),
  },
  mounted() {
    this.subscribe();
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
