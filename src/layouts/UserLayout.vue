<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar class="bg-amber">
        <q-toolbar-title>YumYum</q-toolbar-title>

        <q-btn color="grey" text-color="red" @click="logout">Logout</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" class="bg-grey-3" style="text-align: center">
        <q-btn rounded color="primary" no-caps icon-right="add" @click="addRecipe">New recipe&nbsp;</q-btn>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {useRouter} from "vue-router";
import signOutUser from 'src/firebase/auth/firebase-signout'
import {createRecipe} from "src/firebase/firestore/firestore-recipes";

export default defineComponent({
  name: 'UserLayout',
  setup() {
    const router = useRouter()
    const logout = () => {
      console.log("signout")
      signOutUser().then(() => {
        router.push('/')
      })
    }

    const addRecipe = () => {
      createRecipe().then((newRecipeId) => {
        router.push('/user/e/' + newRecipeId)
      })
    }

    return {
      logout,
      drawer: ref(false),
      addRecipe
    }
  }
})
</script>

<style scoped>
</style>
