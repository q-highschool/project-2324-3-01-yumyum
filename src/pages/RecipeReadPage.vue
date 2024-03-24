<template>
  <div v-if="Object.keys(recipe).length !== 0">
    <div class="row">
      <q-btn round icon="arrow_back"/>
      <h4>&nbsp;{{ recipe.content.title }}</h4>
    </div>
    <p>
      Written by: {{recipe.author.name}}
      <br>
      At: {{recipe.create_ts}}
    </p>
    <q-separator/>

    <div style="margin-top: 20px" v-html="recipe.content.article"/>
  </div>
  <div v-else>
    <q-inner-loading
      :showing="true"
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';
import { useRoute } from 'vue-router';
import {getAllRecipes, getSpecificRecipe} from "src/firebase/firestore/firestore-recipes";

export default defineComponent({
  name: 'RecipeReadPage',
  setup() {
    const route = useRoute();
    const recipeId = route.params.recipeId;
    const recipe = ref({})

    getSpecificRecipe(recipeId).then((receivedRecipe) => {
      recipe.value = receivedRecipe;
    });
    return {
      recipe
    };
  }
});
</script>

<style scoped>
</style>
