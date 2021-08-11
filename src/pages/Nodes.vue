<template>
  <q-page class="q-pa-sm">
    <NodesModule/>
    <q-separator class="q-ma-sm"/>
    <CategoryModule/>
  </q-page>
</template>

<script>
import NodesModule from 'components/Nodes/NodesModule';
import CategoryModule from 'components/Nodes/CategoryModule';

export default {
  name: 'PageIndex',
  components: {
    CategoryModule,
    NodesModule
  }
};
</script>
