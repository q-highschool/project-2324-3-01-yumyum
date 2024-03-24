import {LocalStorage} from 'quasar'
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    if (firebase.auth().currentUser) {
      LocalStorage.set('user', firebase.auth().currentUser);
    } else {
      LocalStorage.remove('user')

    }
    // Persistence set successfully
    // console.log("Persistence set to local storage");
  })
  .catch(error => {
    // Error setting persistence
    console.error(error);
  })

export {firebase}
