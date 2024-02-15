<template>
  <q-page>
    <q-toolbar class="bg-amber">
      <q-toolbar-title>[PRODUCT_NAME]</q-toolbar-title>

      <q-btn color="primary" @click="this.$router.push('/auth/sign_up')">Sign up</q-btn>
      <q-btn color="grey" @click="this.$router.push('/auth/sign_in')">Sign in</q-btn>
    </q-toolbar>
    About page
  </q-page>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AboutPage'
})
</script>

<style scoped>
</style>
