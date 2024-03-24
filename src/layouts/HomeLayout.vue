<template>
  <q-layout>
    <q-toolbar class="bg-amber">
      <q-toolbar-title>YumYum</q-toolbar-title>

      <q-btn color="primary" @click="this.$router.push('/auth/sign_up')">Sign up</q-btn>
      <q-btn color="grey" @click="this.$router.push('/auth/sign_in')">Sign in</q-btn>
    </q-toolbar>
    
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HomeLayout'
})
</script>

<style scoped>
</style>
