<template>
  <div>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <div class="q-px-sm "><h6 class="q-my-sm">CATEGORIES</h6>
          <q-scroll-area style="height: 500px;">
            <div class="q-gutter-sm q-pt-sm">
              <q-btn color="primary" label="Add" size="sm" @click="handleClick"/>
              <q-btn :disabled="!activeCategory" color="red" label="remove" size="sm" @click="handleClick"/>
            </div>
            <q-list separator class="q-py-sm">
              <q-item v-for="category in categoryList" :key="category.id" v-ripple clickable
                      @click="()=>handleClick(category.id)">
                <q-item-section>
                  <q-item-label>{{ category.title }}</q-item-label>
                  <q-item-label caption>{{ category.title2 }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>

        </div>
      </template>

      <template v-slot:after>
        <div class="q-px-sm "><h6 class="q-my-sm">CATEGORY PROPERTIES</h6>
          <div v-if="activeCategory">
            <p>ID: {{ activeCategory }}</p>
            <p>Title: {{ categoryList[activeCategory - 1].title }}</p>
            <p>Title2: {{ categoryList[activeCategory - 1].title2 }}</p>
            <p>Color: {{ categoryList[activeCategory - 1].color }}</p>
            <p>Size: {{ categoryList[activeCategory - 1].size_mult }}</p>
            <p>Distance: {{ categoryList[activeCategory - 1].distance }}</p>
            <p>image: {{ categoryList[activeCategory - 1].image }}</p>
            <p>External: {{ categoryList[activeCategory - 1].externalNodes }}</p>
            <p>Keywords: {{ categoryList[activeCategory - 1].keywords }}</p>

          </div>
        </div>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import categoryList from 'src/config/categoryList';

export default {
  data() {
    return {
      splitterModel: 50,
      categoryList,
      activeCategory: null,

    };
  },
  methods: {
    handleClick(id) {
      this.activeCategory = id;
    }
  },
};
</script>
