<template>
  <q-item class="tweet-list-item q-py-md">
    <q-item-section avatar top>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar4.jpg">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">
        <span class="text-weight-bold q-mr-sm">
          {{ tweet.author.fullname }}
        </span>
        <span class="text-grey-7">
          {{ tweet.author.nickname }}
        </span>
      </q-item-label>
      <q-item-label class="text-body1">
        {{ tweet.content }}
      </q-item-label>

      <div class="row">
        <div class="col">
          <q-btn
            color="grey"
            icon="far fa-comment"
            size="sm"
            flat
            round
          />
        </div>
        <div class="col">
          <q-btn
            color="grey"
            icon="fas fa-retweet"
            size="sm"
            flat
            round
          />
        </div>
        <div class="col">
          <q-btn
            color="grey"
            icon="far fa-heart"
            size="sm"
            flat
            round
          />
        </div>
        <div class="col">
          <q-btn
            color="grey"
            icon="fas fa-trash"
            size="sm"
            flat
            round
            @click="$emit('delete')"
          />
        </div>
      </div>
    </q-item-section>

    <q-item-section side top>
      {{ tweet.createdAt | fromNow }}
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'TweetListItem',
  props: {
    tweet: {
      type: Object,
      require: true,
    },
  },
};
</script>
