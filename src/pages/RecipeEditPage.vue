<template>
  <div>
    <h1>Edit Recipe</h1>
    <p>Recipe ID: {{ recipeId }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'RecipeEditPage',
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
