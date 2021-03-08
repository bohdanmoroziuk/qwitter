<template>
  <form
    class="new-tweet-form"
    @submit.prevent="handleSubmit"
  >
    <div class="row q-col-gutter-md items-end">
      <div class="col">
        <q-input
          class="text-input"
          bottom-slots
          v-model.trim="text"
          placeholder="What's happening?"
          counter
          maxlength="280"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </template>

        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          class="q-mb-lg"
          :disable="!text"
          rounded
          unelevated
          color="primary"
          label="Qweet"
          no-caps
          type="submit"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'NewTweetForm',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.text);
      this.text = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.text-input textarea {
  font-size: 18px;
  line-height: 1.5 !important;
}
</style>
