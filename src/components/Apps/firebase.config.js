
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBg5jWdd0vg-nPGyu2NoyAM_JOjnsz96Ro",
  authDomain: "b09-ass09-2nd.firebaseapp.com",
  projectId: "b09-ass09-2nd",
  storageBucket: "b09-ass09-2nd.appspot.com",
  messagingSenderId: "962271539272",
  appId: "1:962271539272:web:b18ca14045bd7f294c287d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;