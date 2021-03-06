<template>
  <q-page>
    <div class="q-py-lg q-px-md">
      <new-tweet-form />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Home',

  components: {
    NewTweetForm: () => import('components/NewTweetForm.vue'),
  },
};
</script>
