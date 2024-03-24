import {signInWithEmailAndPassword} from 'firebase/auth'
import {firebase} from '../index.js'

const auth = firebase.auth()


const signInUser = (data) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, data.email, data.password).then(userCredential => {
      resolve(userCredential.user)
    }).catch(err => {
      reject(err.message)
    })
  })
}
export default signInUser
