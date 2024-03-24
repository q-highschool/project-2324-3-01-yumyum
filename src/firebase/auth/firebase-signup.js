import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {firebase} from '../index.js'

const auth = firebase.auth()


const signUpUser = (data) => {
  return new Promise((resolve, reject) => {

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        updateProfile(userCredential.user, {
          displayName: data.first_name + " " + data.last_name
        })

        resolve(userCredential.user)
      }).catch(err => {
      reject(err.message)
    })
  })
}

export default signUpUser
