<template>
  <ModalWrapper :handleClose="handleClose">
    <div class="modal-content">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-h6">Add node</div>
        </q-card-section>

        <q-card-section class="q-pt-none">

          <q-file v-model="image" label="upload image" outlined>
            <template v-slot:prepend>
              <q-icon name="attach_file"/>
            </template>
          </q-file>
          <q-input v-model="nodeName" autofocus dense label="category title"
                   @keyup.enter="prompt = false"/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn v-close-popup flat label="Cancel" @click="handleClose"/>
          <q-btn v-close-popup color="positive" label="Add" @click="handleAdd"/>
        </q-card-actions>
      </q-card>
    </div>
  </ModalWrapper>
</template>

<script>

import ModalWrapper from 'components/Modal/ModalWrapper';

export default {
  name: 'AddNodeModal',
  components: { ModalWrapper },
  props: ['handleClose'],
  data() {
    return {
      image: null,
      nodeName: '',
    };
  },
  methods: {
    handleAdd() {
      console.warn('klik');
    }
  }
};

</script>
