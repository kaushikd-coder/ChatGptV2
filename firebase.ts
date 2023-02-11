import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACcn_YgGiaGFVMih9pMFts98jOyWwr0ps",
    authDomain: "chatgptv2-fa3b1.firebaseapp.com",
    projectId: "chatgptv2-fa3b1",
    storageBucket: "chatgptv2-fa3b1.appspot.com",
    messagingSenderId: "356552050100",
    appId: "1:356552050100:web:8f56a8513e26cf42d1dee1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };