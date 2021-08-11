<template>
  <div>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <div class="q-px-sm "><h6 class="q-my-sm">NODES</h6>
          <q-scroll-area style="height: 500px;">
            <q-input dense ref="filter" filled v-model="filter" label="Filter">
              <template v-slot:append>
                <q-icon v-if="filter !== ''" name="clear" class="cursor-pointer"
                        @click="resetFilter"/>
              </template>
            </q-input>
            <div class="q-gutter-sm q-pt-md">
              <q-btn :disabled="!selected" color="primary" label="Add" size="sm"
                     @click="handleClick"/>
              <q-btn :disabled="!selected" color="red" label="remove" size="sm"
                     @click="handleClick"/>
              <q-checkbox v-model="visible" label="visible"/>
              <q-checkbox v-model="allowed" label="allow to post"/>
            </div>

            <q-tree
              ref="tree"
              :nodes="nodeList"
              node-key="label"
              :filter="filter"
              default-expand-all
              :selected.sync="selected"

            />
          </q-scroll-area>

        </div>
      </template>

      <template v-slot:after>
        <div class="q-px-sm "><h6 class="q-my-sm">ARTICLE LIST</h6>
          <q-scroll-area style="height: 500px;">

            <div v-if="selected">
              <p v-if="activeNode && !activeNode.articles">No articles in selected category</p>
              <div v-if="activeNode && activeNode.articles">
                <div v-for="article in activeNode.articles" :key="article.id">
                  <p>ID: {{ article.id }}</p>
                  <p>Title: {{ article.title }}</p>
                  <p>Short: {{ article.short_desc }}</p>
                  <q-separator/>
                </div>
              </div>
            </div>
          </q-scroll-area>
        </div>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import nodeList from 'src/config/nodeList';

export default {
  data() {
    return {
      splitterModel: 50,
      nodeList,
      filter: '',
      visible: true,
      allowed: true,
      selected: null
    };
  },
  methods: {
    resetFilter() {
      this.filter = '';
      this.$refs.filter.focus();
    },
    handleClick() {
      console.warn('klik');
    }
  },
  computed: {
    activeNode() {
      return this.$refs.tree.getNodeByKey(this.selected);
    }
  }
};
</script>
