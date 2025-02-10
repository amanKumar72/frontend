import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc,getDocs, getFirestore } from "firebase/firestore";
import {child, get, getDatabase, onValue, ref, set} from 'firebase/database'

//details of the firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMFnPMCLntcic9AkbsjutozyJY-scCEO0",
  authDomain: "fir-d8e8d.firebaseapp.com",
  projectId: "fir-d8e8d",
  storageBucket: "fir-d8e8d.firebasestorage.app",
  messagingSenderId: "132493056740",
  appId: "1:132493056740:web:5cba715a6ed1d15f0f6af1",
  databaseURL:'https://fir-d8e8d-default-rtdb.firebaseio.com/'
};

//create a firebase application and auth
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//for firestore
const db = getFirestore(app);

//for authentication by google
const googleProvider = new GoogleAuthProvider();

//for realtime database
const database = getDatabase(app)

//create a context
const FirebaseContext = createContext();

//create a custom hook for firebase
export const useFirebase = () => useContext(FirebaseContext);

//firebase provider which is used by all children of the app
// eslint-disable-next-line react/prop-types
export const FirebaseProvider = ({ children }) => {
  //to create a user in firebase
  const signUp = async function (email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((error) => console.error(error));
  };

  //to verify a user
  const signIn = async function (email, pass) {
    return signInWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((error) => console.error(error));
  };

  //to sign in with google
  const signInWithGoogle = async function () {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        return result.user;
      })
      .catch((error) => console.error(error));
  };

  //to signout
  const signOutUser = async () => {
    return signOut(auth)
      .then((user) => console.log(user))
      .catch((e) => console.error(e));
  };

  //add doc to a collection
  const addDocument = async function (collectionName, data) {
    try {
      const addeddoc = addDoc(collection(db, collectionName), data).then();
      console.log("Document written with ID: ", addeddoc.id);
    } catch (error) {
      console.log(error);
    }
  };

  //get all documents from a collection
  const getAllDocuments=async function (collectionName) {
    const allDocs=await getDocs(collection(db, collectionName));
    console.log("All documents:", allDocs.docs.map((doc) => doc.id));
    return allDocs.docs.map((doc) => ({ id: doc.id,...doc.data() }));
  }


  //add into realtime db
  const addIntoRealtimeDB = async function (key, data) {
    set(ref(database, `${key}/${data.name}`),data)
  }
  //add into realtime db
  const getFromRealtimeDB = async function (key) {
    get(child( ref(database),key)).then(snap=>console.log(snap.val()))
  }


  //run on every change in the database
  onValue(ref(database,'users'),(snap)=>console.log(snap.val()))

  return (
    <FirebaseContext.Provider
      value={{ signUp, signIn, signOutUser, signInWithGoogle, getAllDocuments, addDocument ,addIntoRealtimeDB,getFromRealtimeDB}}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
