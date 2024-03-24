<template>
  <q-layout>
    <q-toolbar class="bg-amber">
      <q-toolbar-title>YumYum</q-toolbar-title>

      <q-btn color="primary" @click="this.$router.push('/auth/sign_up')">Sign up</q-btn>
      <q-btn color="grey" @click="this.$router.push('/auth/sign_in')">Sign in</q-btn>
    </q-toolbar>

    <div class="row">
      <div class="col"/>

      <div class="col-12" style="max-width: 1200px; width: 80%">
        <q-page-container>
          <router-view/>
        </q-page-container>
      </div>

      <div class="col"/>
    </div>

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
