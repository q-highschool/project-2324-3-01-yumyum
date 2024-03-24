import {db, firebase} from '../index'

const auth = firebase.auth()

export const createRecipe = () => {
  return new Promise((resolve, reject) => {
    var batch = db.batch()

    var recipeRef = db.collection('recipes').doc()
    var recipeInfo = {
      owner: auth.currentUser.uid,
      recipeId: recipeRef.id,
      author: {
        name: auth.currentUser.displayName,
        article: ''
      },
      create_ts: firebase.firestore.FieldValue.serverTimestamp(),
      content: {
        title: 'New recipe'
      }
    }
    batch.set(recipeRef, recipeInfo)

    batch.commit().then(() => {
      // console.log('Successfully created card')
      resolve(recipeRef.id)
    }).catch(error => {
      // console.error(error)
      reject(error)
    })
  })
}


export const getUserRecipes = (userId) => {
  return new Promise((resolve, reject) => {
    // Query recipes collection for recipes owned by the specified user
    db.collection('recipes')
      .where('owner', '==', userId)
      .get()
      .then((querySnapshot) => {
        const userRecipes = [];
        querySnapshot.forEach((doc) => {
          // For each recipe found, push its data into the userRecipes array
          userRecipes.push({id: doc.id, ...doc.data()});
        });
        resolve(userRecipes); // Resolve with the array of user's recipes
      })
      .catch((error) => {
        reject(error); // Reject with the error if any
      });
  });
};

export const getSpecificRecipe = (recipeId) => {
  return new Promise((resolve, reject) => {
    db.collection('recipes').doc(recipeId).get().then((doc) => {
      resolve(doc.data());
    }).catch((error) => {
      reject(error);
    })
  })
}

export const updateRecipe = (recipeId, newRecipeContent) => {
  return new Promise((resolve, reject) => {
    db.collection('recipes').doc(recipeId).update({
      content: newRecipeContent
    }).then(() => {
      resolve()
    }).catch((error) => {
      reject(error);
    })
  })
}

export const getAllRecipes = () => {
  return new Promise((resolve, reject) => {
    db.collection('recipes').limit(10).get().then((querySnapshot) => {
      const recipesData = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      resolve(recipesData);
    }).catch((error) => {
      reject(error);
    })
  })
}
