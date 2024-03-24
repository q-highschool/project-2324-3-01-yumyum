<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar class="bg-amber">
        <q-toolbar-title>YumYum</q-toolbar-title>

        <q-btn color="grey" text-color="red" @click="logout">Logout</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-if="isUserPath" show-if-above v-model="drawer" class="bg-grey-3" style="text-align: center">
      <q-btn rounded color="primary" no-caps icon-right="add" @click="addRecipe">New recipe&nbsp;</q-btn>
    </q-drawer>

    <div class="row">
      <div class="col"/>

      <div class="col-12" style="max-width: 1600px; width: 80%">
        <q-page-container>
          <router-view/>
        </q-page-container>
      </div>

      <div class="col"/>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { useRouter, useRoute } from "vue-router";
import signOutUser from 'src/firebase/auth/firebase-signout'
import { createRecipe } from "src/firebase/firestore/firestore-recipes";

export default defineComponent({
  name: 'UserLayout',
  setup() {
    const router = useRouter();
    const route = useRoute();

    const logout = () => {
      console.log("signout")
      signOutUser().then(() => {
        router.push('/');
      });
    };

    const addRecipe = () => {
      createRecipe().then((newRecipeId) => {
        router.push('/user/e/' + newRecipeId);
      });
    };

    const drawer = ref(false);

    // Watch route changes and update drawer visibility accordingly
    watch(route, (to, from) => {
      updateDrawerVisibility(to.path);
    });

    const isUserPath = ref(false);

    const updateDrawerVisibility = (path) => {
      isUserPath.value = path === '/user';
    };

    // Initialize drawer visibility based on current path
    updateDrawerVisibility(route.path);

    return {
      logout,
      drawer,
      addRecipe,
      isUserPath
    };
  }
});
</script>

<style scoped>
</style>
