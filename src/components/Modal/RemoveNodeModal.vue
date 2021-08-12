<template>
  <ModalWrapper :handleClose="handleClose">
    <div class="modal-content">
      <q-card style="'min-width: 350px'">
        <q-card-section>
          <div class="text-h6">Remove node</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Are You sure You want to remove this node?</p>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn v-close-popup flat label="Cancel" @click="handleClose"/>
          <q-btn v-close-popup color="negative" label="Remove"/>
        </q-card-actions>
      </q-card>
    </div>
  </ModalWrapper>
</template>

<script>
import ModalWrapper from 'components/Modal/ModalWrapper';
export default {
  name: 'RemoveNodeModal',
  components: { ModalWrapper },
  props: ['handleClose'],
};
</script>
