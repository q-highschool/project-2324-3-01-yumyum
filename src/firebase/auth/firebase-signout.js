import {signOut} from 'firebase/auth'
import {firebase} from '../index.js'

const auth = firebase.auth()


const signOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth).then(() => {
      resolve()
    }).catch(err => {
      reject(err.message)
    })
  })
}

export default signOutUser
