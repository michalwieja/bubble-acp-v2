<template>
  <transition appear name="fade">
    <div v-if="visible" :class="{top}" class="modal__wrapper" @click.self.prevent="handleClose">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    top: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    handleClose: {
      type: Function,
      required: true,
    },
    close_on_route_change: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
