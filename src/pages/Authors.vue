<template>
  <q-page>
    <div class="row q-pa-md">
      <AuthorList/>
      <AuthorInfo/>
      <ArticleList/>

    </div>
  </q-page>
</template>

<script>



import AuthorList from 'components/Author/AuthorList';
import AuthorInfo from 'components/Author/AuthorInfo';
import ArticleList from 'components/Author/ArticleList';
export default {
  name: 'Author',
  components: {
    ArticleList,
    AuthorInfo,
    AuthorList
  },
};
</script>
