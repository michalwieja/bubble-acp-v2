<template>
  <q-page class="q-pa-sm">
    <NodesModule @addNode="toggleModal('addNode',true)"
                 @removeNode="toggleModal('removeNode',true)"/>
    <q-separator class="q-ma-sm"/>
    <CategoryModule @addCategory="toggleModal('addCategory', true)"
                    @removeCategory="toggleModal('removeCategory',true)"/>
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
  },
  data() {
    return {
      modal: {
        addCategory: false,
        addNode: false,
        removeNode: false
      }
    };
  },
  methods: {
    toggleModal(modalName, state = false) {
      this.modal[modalName] = state;
    }
  },
  async mounted() {
    const res = await this.$apiCall('bubble', 'list');
    console.warn('bubble', res);
  }
};
</script>
