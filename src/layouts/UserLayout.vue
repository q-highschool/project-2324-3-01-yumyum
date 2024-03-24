<template>
  <q-layout>
    <q-toolbar class="bg-amber">
      <q-toolbar-title>YumYum</q-toolbar-title>

      <q-btn color="grey" text-color="red" @click="logout">Logout</q-btn>
    </q-toolbar>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue';
import {useRouter} from "vue-router";
import signOutUser from 'src/firebase/auth/firebase-signout'

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
    return {
      logout
    }
  }
})
</script>

<style scoped>
</style>
