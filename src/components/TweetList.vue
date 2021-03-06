<template>
  <q-list class="tweet-list" separator>
    <tweet-list-item
      v-for="tweet of tweets"
      :tweet="tweet"
      :key="tweet.id"
      @delete="$emit('delete-tweet', tweet.id)"
    />
  </q-list>
</template>

<script>
export default {
  name: 'TweetList',
  props: {
    tweets: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TweetListItem: () => import('components/TweetListItem.vue'),
  },
};
</script>
