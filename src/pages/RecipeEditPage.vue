<template>
  <div>
    <div class="row">
<!--     TODO: Some style needs to be done for this awful button...-->
      <q-btn round icon="arrow_back" @click="$router.push('/user')"/>
      <h4>Edit Recipe</h4>
    </div>
    {{recipeContent}}
    <h6 style="margin: 10px 0 0;">Title</h6>
    <q-input dense outlined v-model="recipeContent.title"/>

    <h6 style="margin: 20px 0 0;">Recipe</h6>
    <q-editor
      v-model="recipeContent.article"
      :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />

    <div class="row" style="margin: 10px 0 0;">
      <q-space/>
      <q-btn color="primary" @click="saveChanges">Save changes</q-btn>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import firebase from "firebase/compat";
import {getSpecificRecipe, updateRecipe} from "src/firebase/firestore/firestore-recipes";

export default defineComponent({
  name: 'RecipeEditPage',
  setup() {
    const route = useRoute();
    const recipeId = route.params.recipeId;

    const auth = firebase.auth();
    const recipe = ref({});
    const recipeContent = ref({});
    const loading = ref(true);

    const fetchSpecificRecipe = async (recipeId) => {
      try {
        const fetchedRecipe = await getSpecificRecipe(recipeId);
        recipe.value = fetchedRecipe;
        recipeContent.value = fetchedRecipe.content;
        loading.value = false;
      } catch (error) {
        console.error('Error fetching user recipes:', error);
        // Handle error here (e.g., show error message)
      }
    };

    const saveChanges = () => {
      if (recipe.value || recipeContent.value) {
        updateRecipe(recipeId, recipeContent.value)
      }
    }

    onMounted(() => {
      // Initialize onAuthStateChanged listener
      // Unsubscribe from onAuthStateChanged when component is unmounted
      return auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, fetch user recipes
          fetchSpecificRecipe(recipeId);
        } else {
          // No user is signed in, reset recipes
          recipe.value = {};
          loading.value = false;
        }
      });
    })

    return {
      recipeContent,
      saveChanges
    };
  }
});
</script>

<style scoped>
</style>
