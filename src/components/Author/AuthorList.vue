<template>
  <div class="q-pa-md col-2">
    <q-list separator>
      <q-item v-for="author in authors" :key="author.id" v-ripple clickable>
        <q-item-section>
          <q-item-label>{{ author.name }}</q-item-label>
          <q-item-label caption>{{ author.email }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
const authors = [{
  id: 1,
  name: 'Michał Wieja',
  email: 'rjedrzej0@discuz.net',
  letter: 'M',
}, {
  id: 2,
  name: 'Kamil Michalczak',
  email: 'malessandrini1@marketwatch.com',
  letter: 'L',
}, {
  id: 3,
  name: 'akub Jodłowski',
  email: 'ewicklen2@microsoft.com',
  letter: 'J',
}];

export default {
  data() {
    return {
      authors
    };
  },

};
</script>
