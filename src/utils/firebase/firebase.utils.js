// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase authentication service
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Firebase firestore database
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLvMXAiwEoslSANsF0L9HQVIY_CmHWlwI",
  authDomain: "ecommerce-clothing-db-c5b81.firebaseapp.com",
  projectId: "ecommerce-clothing-db-c5b81",
  storageBucket: "ecommerce-clothing-db-c5b81.firebasestorage.app",
  messagingSenderId: "92266256990",
  appId: "1:92266256990:web:26dfbcd5f35b68dfcd32cf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Instantiating Firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log('userSnapshot:', userSnapshot);
    // console.log('userSnapshot exists?:', userSnapshot.exists());


    if (!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      
      try {
        await setDoc(userDocRef, {
          displayName, 
          email, 
          createdAt
        });
      } catch (error) {
        console.error('error creating the user', error.message)
      }
    }


    return userDocRef;


}


    
