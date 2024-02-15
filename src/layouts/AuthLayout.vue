<template>
  <q-layout class="page" view="lHh Lpr lFf">
    <q-page-container>
      <div class="row">
        <div class="col"/>
        <div class="col-6 sign-in-component">
          <q-page-container>
            <router-view/>
          </q-page-container>
        </div>
        <div class="col"/>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AuthLayout'
})
</script>

<style scoped>
.page {
  background: purple;
}

.sign-in-component {
  max-width: 600px;
  min-width: 400px;
  background: yellow;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px
}
</style>
