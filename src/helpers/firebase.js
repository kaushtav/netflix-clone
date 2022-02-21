import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCOkKISUb0t2KqlUv1CQMtx0hjQaTku9Q4",
    authDomain: "netflix-clone-40b7c.firebaseapp.com",
    projectId: "netflix-clone-40b7c",
    storageBucket: "netflix-clone-40b7c.appspot.com",
    messagingSenderId: "289467912123",
    appId: "1:289467912123:web:5d14e0ee69dce7faeb3e9e",
    measurementId: "G-KN3TYPL4NS"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = {
            uid: res.user.uid,
            name,
            profiles:[
                {name,avatar:0,list:[]}
            ],
            email,
        }
        await db.collection("users").doc(user.uid).set(user);
        return user
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logout = async () => {
    await auth.signOut();
};
const getUser = async (uid) => {
    console.log(uid)
    const user = await db.collection('users').where('uid', '==', uid).get()
    return user.docs[0].data()
}
const updateProfiles = async (profiles) => {
    await db.collection('users').doc(auth.currentUser.uid).update({profiles:profiles})
}
export {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
    getUser,
    updateProfiles
};
