<template>

  <div class="col-5">
    <h6 class="q-ma-md">INFO</h6>
    <div class="q-ma-md">
      <p>id:</p>
      <p>rating:</p>
      <p>email:</p>
      <p>personal info:</p>
      <p>website:</p>
      <p>statistics:</p>
    </div>
    <q-separator inset spaced/>
    <h6 class="q-ma-md">GROUP</h6>
    <div class="q-ma-md row wrap">
      <q-checkbox class="col-3" v-for="index in 12" :key="index" v-model="right" :label="index"/>
    </div>
    <q-separator inset spaced/>
    <h6 class="q-ma-md">INTERNAL RATING</h6>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column">
        <q-rating
          v-model="ratingModel"
          color="primary"
          icon="star_border"
          icon-selected="star"
          size="2.5em"
        />
      </div>
    </div>
    <q-separator inset spaced/>
    <h6 class="q-ma-md">OPTIONS</h6>
    <div class="q-ma-md flex justify-end">
      <q-icon class="text-negative cursor-pointer" name="remove" style="font-size: 3rem"/>
      <q-icon class="text-primary cursor-pointer" name="email" style="font-size: 3rem"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AuthorInfo',

};
</script>
