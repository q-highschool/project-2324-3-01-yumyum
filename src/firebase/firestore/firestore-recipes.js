import {db, firebase} from '../index'

const auth = firebase.auth()

export const createRecipe = () => {
  return new Promise((resolve, reject) => {
    var batch = db.batch()

    var recipeRef = db.collection('recipes').doc()
    var recipeInfo = {
      owner: auth.currentUser.uid,
      author: {
        name: auth.currentUser.displayName
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
