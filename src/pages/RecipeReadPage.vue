<template>
  <div>
    <h4>Recipe reead page</h4>
    <p>Recipe ID that needs to be shown: {{ recipeId }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'RecipeReadPage',
  setup() {
    const route = useRoute();
    const recipeId = route.params.recipeId;

    return {
      recipeId
    };
  }
});
</script>

<style scoped>
</style>
