<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn aria-label="Menu" dense flat icon="menu" rounded @click="toggleLeftDrawer"/>
        <q-toolbar-title>Bubble News</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-1" show-if-above>
      <q-list>
        <q-item-label class="text-grey-8" header>Essential Links</q-item-label>
        <EssentialLink v-for="link in linksData" :key="link.title" v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Nodes',
    caption: 'See nodes tree',
    icon: 'circle',
    link: '/nodes',
  },
  {
    title: 'Authors',
    caption: 'See authors list',
    icon: 'people',
    link: '/Authors',
  },
  {
    title: 'Moderators',
    caption: 'See moderators list',
    icon: 'people',
    link: '/moderators',
  },
];
export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      linksData
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  }
};
</script>
