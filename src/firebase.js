import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import  toast  from "react-hot-toast";
import { userHandle } from "./utils";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA9k7o9wQYT0d3YFP5RTbK9RDzqRI0EO04",
  authDomain: "zaursuleymanov-instagram.firebaseapp.com",
  projectId: "zaursuleymanov-instagram",
  storageBucket: "zaursuleymanov-instagram.appspot.com",
  messagingSenderId: "361500610743",
  appId: "1:361500610743:web:71b0494a35f42e95ecfd32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

onAuthStateChanged(auth, async user => {
    if(user) {
      const dbUser = await getDoc(doc(db, "users", user.uid))
      let data = {
        uid: user.uid,
        fullName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        ...dbUser.data()
      }
      userHandle(data)
    }
    else {
      userHandle(false)
    }
})

export const login = async (email, password) => {
   try {
    return await signInWithEmailAndPassword(auth, email, password)
   }
   catch (err) {
    toast.error(err.code)
   }
}

export const getUserInfo = async uname => {
  const username = await getDoc(doc(db, "usernames", uname))

  if(username.exists()) {
    return (await getDoc(doc(db, "users", username.data().user_id))).data()
  }
  else {
    toast.error("Username is not found!")
    throw new Error("Username is not found!")
  }
}

export const register = async ({email, password, full_name, username}) => {
  try {

    const user = await getDoc(doc(db, "usernames", username))

    if(user.exists()) {
      toast.error(`${username} you entered username is already in use by another account.`)
    }
    else {

   const response = await createUserWithEmailAndPassword(auth, email, password)

   if(response.user) {

    await setDoc(doc(db, "usernames", username), {
      user_id: response.user.uid
     })
  
     await setDoc(doc(db, "users", response.user.uid), {
      fullName: full_name,
      username: username,
      followers: [],
      following: [],
      notifications: [],
      website: '',
      bio: '',
      phoneNumber: '',
      gender: '',
      post: 0,
     })
  
     await updateProfile(auth.currentUser, {
      displayName: full_name,
     })
  
     return response.user
    }

   }

  }
  catch (err) {
   toast.error(err.code)
  }
}

export const logout = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		toast.error(err.code)
	}
}
