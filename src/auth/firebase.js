import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email,password, navigate, displayName) =>{
    try {
      let userCredential= await  createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: displayName, 
      });
      toastSuccessNotify('Registered successfully!');
      navigate('/');
      console.log(userCredential);
    } catch (err) {
        toastErrorNotify(err.message);
    };
};

export const signIn = async(email,password, navigate) =>{
    try {
      let userCredential= await  signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      toastSuccessNotify('Logged in successfully!');
    //   sessionStorage.setItem('user',JSON.stringify(userCredential.user));
    //   console.log(userCredential);
    console.log(userCredential);
    } catch (err) {
      toastErrorNotify(err.message);
        console.log(err);
    };
};


export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
         
         setCurrentUser(user);
        } else {
          // User is signed out
          setCurrentUser(false);
        }
      });
};

export const logOut = () => {
    signOut(auth);
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    navigate('/');
    toastSuccessNotify('Logged out successfully!');
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
    
  });
};