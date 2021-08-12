<template>
  <q-page class="q-pa-sm">
    <NodesModule @addNode="toggleModal('addNode',true)"
                 @removeNode="toggleModal('removeNode',true)"/>
    <q-separator class="q-ma-sm"/>
    <CategoryModule @addCategory="toggleModal('addCategory', true)"
                    @removeCategory="toggleModal('removeCategory',true)"/>
    <AddNodeModal v-if="modal.addNode" :handleClose="()=>toggleModal('addNode')"/>
    <RemoveNodeModal v-if="modal.removeNode" :handleClose="()=>toggleModal('removeNode')"/>
  </q-page>
</template>

<script>
import NodesModule from 'components/Nodes/NodesModule';
import CategoryModule from 'components/Nodes/CategoryModule';
import AddNodeModal from 'components/Modal/AddNodeModal';
import RemoveNodeModal from 'components/Modal/RemoveNodeModal';

export default {
  name: 'PageIndex',
  components: {
    RemoveNodeModal,
    AddNodeModal,
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
