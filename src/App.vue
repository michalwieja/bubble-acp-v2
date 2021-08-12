<template>
  <div id="q-app" v-if="isConfig">
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      isConfig: false
    };
  },
  methods: {
    ...mapActions('init', ['setConfig']),
    ...mapActions('auth', ['getSession'])
  },
  async mounted() {
    await this.setConfig(this.$router);
    this.isConfig = true;
    this.getSession(this);

  }
};
</script>
