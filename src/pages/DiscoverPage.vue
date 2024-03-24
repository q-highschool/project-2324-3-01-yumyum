<template>
  <q-page>

    <div class="text-h4" style="text-align: center">Discover Recipes</div>

    <q-input rounded disable outlined v-model="text" placeholder="Search for recipes...">
      <template v-slot:append>
        <q-icon name="search"/>
      </template>
    </q-input>
    Search is currently disabled
    <br><br><q-separator/><br>

    show recipes, first let's make functionality to add new recipes
  </q-page>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DiscoverPage',
});
</script>

<style scoped>
</style>
