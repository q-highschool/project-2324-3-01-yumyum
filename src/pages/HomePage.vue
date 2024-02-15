<template>
  <q-page>
    <p>Home page (landing page when logged in)</p>
    <q-btn no-caps @click="logout" label="Sign Out"/>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import signout from 'src/firebase/auth/firebase-signout'
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const router = useRouter()

    const logout = () => {
      console.log("signout")
      signout().then(() => {
        router.push('/about')
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
