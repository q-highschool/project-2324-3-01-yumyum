import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {Loading} from 'quasar'
import {firebase} from '../index.js'

const auth = firebase.auth()


const signUpUser = (data) => {
  return new Promise((resolve, reject) => {
    Loading.show()

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        updateProfile(userCredential.user, {
          displayName: data.first_name + " " + data.last_name
        })

        Loading.hide()
        resolve(userCredential.user)
      }).catch(err => {
      Loading.hide()
      reject(err.message)
    })
  })
}

export default signUpUser
