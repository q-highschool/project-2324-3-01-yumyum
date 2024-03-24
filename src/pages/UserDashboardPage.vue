<template>
  <h5 style="margin-top: 10px; margin-bottom: 0">Your recipes</h5>
  <div v-for="recipe in userRecipes" style="cursor: pointer" :key="recipe.id">
    <q-card style="margin-top: 15px" @click="$router.push(`user/e/${recipe.id}`)">
      {{ recipe}}
    </q-card>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref} from 'vue';
import {getUserRecipes} from "src/firebase/firestore/firestore-recipes";
import firebase from "firebase/compat";

export default defineComponent({
  name: 'RecipeEditPage',
  setup() {
    const auth = firebase.auth();
    const userRecipes = ref([]);
    const loading = ref(true);

    const fetchUserRecipes = async (userId) => {
      try {
        userRecipes.value = await getUserRecipes(userId);
        loading.value = false;
      } catch (error) {
        console.error('Error fetching user recipes:', error);
        // Handle error here (e.g., show error message)
      }
    };

    onMounted(() => {
      // Initialize onAuthStateChanged listener
      // Unsubscribe from onAuthStateChanged when component is unmounted
      return auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, fetch user recipes
          fetchUserRecipes(user.uid);
        } else {
          // No user is signed in, reset recipes
          userRecipes.value = [];
          loading.value = false;
        }
      });
    })

    return {
      userRecipes
    }
  }
});
</script>

<style scoped>
</style>
