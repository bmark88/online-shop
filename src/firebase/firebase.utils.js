import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBzIEeLSON5GohugiaHaL5QplJZOpfvdKQ",
  authDomain: "online-shop-db-9d69c.firebaseapp.com",
  databaseURL: "https://online-shop-db-9d69c.firebaseio.com",
  projectId: "online-shop-db-9d69c",
  storageBucket: "online-shop-db-9d69c.appspot.com",
  messagingSenderId: "863729198787",
  appId: "1:863729198787:web:90f9982c3712f0c3d92476",
  measurementId: "G-Y365H5TBH0"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // firestore.doc('users/sasfxc234cxc234')

  const snapShot = await userRef.get();

  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;