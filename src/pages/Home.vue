<template>
  <q-page>
    <div class="q-py-lg q-px-md">
      <new-tweet-form />
    </div>

    <q-separator
      class="divider"
      size="10px"
      color="grey-2"
    />
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

<style lang="scss" scoped>
.divider {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: $grey-4;
}
</style>
