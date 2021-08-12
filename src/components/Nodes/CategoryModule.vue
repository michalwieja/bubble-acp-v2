<template>
  <div>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <div class="q-px-sm "><h6 class="q-my-sm">CATEGORIES</h6>
          <q-scroll-area style="height: 500px;">
            <div class="q-gutter-sm q-pt-sm">
              <q-btn color="primary" label="Add" size="sm" @click="add = true"/>

            </div>
            <q-list separator class="q-py-sm" v-if="categoryList">
              <q-item v-for="category in categoryList" :key="category.id" v-ripple clickable
                      @click="()=>handleClick(category.id)">
                <q-item-section>
                  <q-item-label>{{ category.name }}</q-item-label>
                  <q-item-label caption>{{ category.title2 }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </template>

      <template v-slot:after>
        <div class="q-px-sm "><h6 class="q-my-sm">CATEGORY PROPERTIES</h6>
          <div class="q-gutter-sm q-pt-sm">
            <q-btn :disabled="!activeId" label="Remove" size="sm" color="negative"
                   @click="remove = true"/>
            <q-btn :disabled="!activeId" color="positive" label="edit" size="sm"/>
          </div>
          <div v-if="activeCategory" class="q-py-sm">
            <p>ID: {{ activeId }}</p>
            <p>Title: {{ activeCategory.name }}</p>
            <p>Title2: {{ activeCategory.title2 }}</p>
            <p>Color: {{ activeCategory.color }}</p>
            <p>Size: {{ activeCategory.size_mult }}</p>
            <p>Distance: {{ activeCategory.distance }}</p>
            <p>image: {{ activeCategory.image }}</p>
            <p>External: {{ activeCategory.externalNodes }}</p>
            <p>Keywords: {{ activeCategory.keywords }}</p>
          </div>
        </div>
      </template>

    </q-splitter>


    <!--add dialog-->
    <q-dialog v-model="add">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Add new category</div>
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
      <q-card v-if="activeCategory">
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="negative" text-color="white"/>
          <span class="q-ml-sm">Are you sure You want to delete {{ activeCategory.name }} </span>
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

export default {
  data() {
    return {
      splitterModel: 50,
      activeId: null,
      categoryList: null,
      remove: false,
      add: false,
      body: {
        name: '',
        position: 1,
        status: 1,
      }
    };
  },
  methods: {
    async getCategoryList() {
      const res = await this.$apiCall('category', 'list');
      this.categoryList = res.data;
    },
    handleClick(id) {
      this.activeId = id;
    },
    async handleRemove() {
      const res = await this.$apiCall('category', 'delete', { id: this.activeId });
      await this.getCategoryList();
      this.activeId = null;
      this.$q.notify({
        type: 'negative',
        message: `Category removed`
      });
    },
    async handleAdd() {
      const res = await this.$apiCall('category', 'create', this.body);
      await this.getCategoryList();
      this.$q.notify({
        type: 'positive',
        message: `Node added`
      });
    }
  },
  computed: {
    activeCategory() {
      return this.categoryList && this.categoryList.find(category => category.id === this.activeId);
    }
  },
  mounted() {
    this.getCategoryList();
  }
};
</script>
