<template>
  <h4 class="flex flex-center">Sign In</h4>
  <q-form ref="form" @submit="submit">
    <p class="text-bold">Email address</p>
    <q-input dense v-model="user.email" outlined autocomplete="email"/>

    <br>
    <p class="text-bold">Password</p>
    <q-input dense v-model="user.password" outlined :type="isPwd ? 'password' : 'text'" autocomplete="current-password">
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <br><br>
    <q-btn class="full-width bg-primary text-white" type="submit" label="Sign In"/>

    <br><br>
    <p class="flex flex-center">
      Don't have an account yet?&nbsp;
      <a href="/auth/sign_up">Register now</a>
    </p>
  </q-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';
import {useRouter} from "vue-router";
import signInUser from "src/firebase/auth/firebase-signin";

export default defineComponent({
  name: 'SignInPage',
  setup() {
    const user = reactive({
      email: null,
      password: null
    })
    const router = useRouter()
    const form = ref(null)

    const submit = async () => {
      if (form.value.validate()) {
        try {
          await signInUser(user)
          await router.push('/')
        } catch (err) {
        }
      }
    }

    return {
      submit,
      form,
      user,
      isPwd: ref(true),
      rememberMe: ref(false)
    }
  }
})
</script>

<style scoped>
</style>
