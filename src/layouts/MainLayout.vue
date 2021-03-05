<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          Qwitter
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
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
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
        },
        {
          to: '/about',
          icon: 'help',
          label: 'About',
        },
      ],
    };
  },
};
</script>
