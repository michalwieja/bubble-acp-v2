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
              <q-btn color="primary" label="Add" size="sm" @click="add = true"/>
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
        <div class="q-px-sm "><h6 class="q-my-sm">NODE PROPERTIES</h6>
          <div class="q-gutter-sm q-pt-sm">
            <q-btn :disabled="!selected" label="Remove" size="sm" color="negative"
                   @click="remove = true"/>
            <q-btn :disabled="!selected" color="positive" label="edit" size="sm"/>
            <q-checkbox v-model="visible" label="visible"/>
            <q-checkbox v-model="allowed" label="allow to post"/>
          </div>
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
    <!--add dialog-->
    <q-dialog v-model="add">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Add new node</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="body.name" autofocus @keyup.enter="handleAdd"/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup/>
          <q-btn flat label="Add" @click="handleAdd" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--remove dialog    -->

    <q-dialog v-model="remove">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="negative" text-color="white"/>
          <span class="q-ml-sm">Are you sure You want to delete</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup/>
          <q-btn flat label="Remove" color="primary" v-close-popup @click="handleRemove"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      selected: null,
      remove: false,
      add: false,
      body: {
        name: ''
      }
    };
  },
  methods: {
    resetFilter() {
      this.filter = '';
      this.$refs.filter.focus();
    },
    handleAdd() {
      this.$q.notify({
        type: 'positive',
        message: `Node added`
      });
    },
    handleRemove() {
      this.$q.notify({
        type: 'negative',
        message: `Node removed`
      });
    }
  },
  computed: {
    activeNode() {
      return this.$refs.tree.getNodeByKey(this.selected);
    }
  }
};
</script>
