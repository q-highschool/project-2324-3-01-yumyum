import {signInWithEmailAndPassword} from 'firebase/auth'
import {Loading} from 'quasar'
import {firebase} from '../index.js'

const auth = firebase.auth()


const signInUser = (data) => {
  return new Promise((resolve, reject) => {
    Loading.show()
    signInWithEmailAndPassword(auth, data.email, data.password).then(userCredential => {
      Loading.hide()
      resolve(userCredential.user)
    }).catch(err => {
      Loading.hide()
      reject(err.message)
    })
  })
}
export default signInUser
