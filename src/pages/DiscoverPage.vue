<template>
  <q-page>

    <div class="text-h4" style="text-align: center">Discover Recipes</div>

    <q-input rounded disable outlined  v-model="searchText" placeholder="Search for recipes...">
      <template v-slot:append>
        <q-icon name="search"/>
      </template>
    </q-input>
    Search is currently disabled
    <br><br><q-separator/><br>

    <div class="row">
      <q-intersection
        v-for="recipe in recipes"
        :key="recipe"
        class="example-item"
      >
        <q-card flat bordered class="q-ma-sm" style="background: lightgray; cursor: pointer" @click="$router.push(`/recipe/r/${recipe.recipeId}`)">
          <p>Image? Functionality that needs to be added later.</p>
          <q-card-section>
            <div class="text-h6">{{recipe.content.title}}</div>
            <div class="text-subtitle2">By: {{recipe.author.name}}</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>

    Currently we are only showing the first 10 recipes to stay hopefully below the free usage limits
    This should be different so you can access every recipe through at least one way. (Search, once this is added)
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {getAllRecipes} from "src/firebase/firestore/firestore-recipes";

export default defineComponent({
  name: 'DiscoverPage',
  setup() {
    const searchText = ref('')
    const recipes = ref([]);

    getAllRecipes().then((receivedRecipes) => {
      recipes.value = receivedRecipes;
    });

    return {
      recipes,
      searchText
    };
  }
});
</script>

<style scoped>
.example-item {
  width: 300px
}
</style>
