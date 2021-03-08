<template>
  <q-list class="tweet-list" separator>
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <tweet-list-item
        v-for="tweet of tweets"
        :key="tweet.id"
        :tweet="tweet"
        @like="$emit('like-tweet', tweet)"
        @delete="$emit('delete-tweet', tweet.id)"
      />
    </transition-group>
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
