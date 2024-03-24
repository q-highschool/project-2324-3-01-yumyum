import {signOut} from 'firebase/auth'
import {Loading} from 'quasar'
import {firebase} from '../index.js'

const auth = firebase.auth()


const signOutUser = () => {
  return new Promise((resolve, reject) => {
    Loading.show()

    signOut(auth).then(() => {
      Loading.hide()
      resolve()
    }).catch(err => {
      Loading.hide()
      reject(err.message)
    })
  })
}

export default signOutUser
