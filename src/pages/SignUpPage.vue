<template>
  <h4 class="flex flex-center">Sign Up</h4>
  <q-form ref="form" @submit="submit">
    <div class="row">
      <div class="col">
        <p class="text-bold">First name</p>
        <q-input dense v-model="user.first_name" outlined/>
      </div>

      <div style="width: 20px"/>

      <div class="col">
        <p class="text-bold">Last name</p>
        <q-input dense v-model="user.last_name" outlined/>
      </div>
    </div>

    <br>
    <p class="text-bold">Email address</p>
    <q-input dense v-model="user.email" outlined autocomplete="email"/>

    <br>
    <p class="text-bold">Password</p>
    <q-input dense :rules="[val => val.length >= 8 || 'Password must contain at least 8 characters']"
             hint="Minimum length is 8 characters." v-model="user.password" outlined
             :type="isPwd ? 'password' : 'text'" autocomplete="current-password">
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <br>
    <q-btn class="full-width bg-primary text-white" label="Sign Up" type="submit"/>

    <br><br>
    <p class="flex flex-center">
      Already have an account?&nbsp;
      <a href="/auth/sign_in">Sign in</a>
    </p>
  </q-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';
import signUpUser from 'src/firebase/auth/firebase-signup'
import {useRouter} from 'vue-router'


export default defineComponent({
  name: 'SingUpPage',
  setup() {
    const user = reactive({
      last_name: null,
      first_name: null,
      email: null,
      password: null,
    });
    const router = useRouter()
    const form = ref(null)

    const submit = async () => {
      if (form.value.validate() && !!await signUpUser(user)) {
        await router.push('/')
      }
    }

    return {
      submit,
      user,
      form,
      isPwd: ref(true),
    }
  }
})
</script>

<style scoped>
</style>
