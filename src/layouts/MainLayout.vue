<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="q-pa-md lt-md header-icon"
            name="fas fa-dove"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="280">
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="primary" />

      <q-list>
        <q-item
          v-for="link of links"
          :key="link.label"
          clickable
          v-ripple
          :to="link.to"
          :exact="link.exact"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">
            {{ link.label }}
          </q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input
        class="q-pa-md"
        rounded
        outlined
        dense
        v-model="searchTerm"
        placeholder="Search Qwitter"
      >
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false,
      links: [
        {
          to: '/',
          icon: 'home',
          label: 'Home',
          exact: true,
        },
        {
          to: '/about',
          icon: 'help',
          label: 'About',
        },
      ],
      searchTerm: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.header-icon {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
