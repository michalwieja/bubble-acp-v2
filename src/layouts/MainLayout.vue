<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn aria-label="Menu" dense flat icon="menu" rounded @click="toggleLeftDrawer"/>
        <q-toolbar-title>Bubble News</q-toolbar-title>
        <q-space/>
        <q-btn label="Logout" @click="handleLogout"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-1" show-if-above>
      <q-list>
        <q-item-label class="text-grey-8" header>Essential Links</q-item-label>
        <EssentialLink v-for="link in menuLinks" :key="link.title" v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';
import menuLinks from 'src/config/menuLinks';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      menuLinks
    };
  },
  computed: {
    ...mapGetters('auth', ['session'])
  },
  methods: {
    ...mapActions('auth', ['logout']),
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    handleLogout() {
      this.logout(this);
    }
  }
};
</script>
