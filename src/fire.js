import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDUOwdWmotqRdpu0jDZs7CkQE_2GWSExaU",
//   authDomain: "my-fyp-ede61.firebaseapp.com",
//   databaseURL: "https://my-fyp-ede61-default-rtdb.firebaseio.com",
//   projectId: "my-fyp-ede61",
//   storageBucket: "my-fyp-ede61.appspot.com",
//   messagingSenderId: "736391874136",
//   appId: "1:736391874136:web:9508db6dff7521784e2c2d",
//   measurementId: "G-8BVSP2PH1K",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDZGHOl52ttzi70wU9_j_-3ziMw4sKrzZQ",
  authDomain: "fyp-b7d8e.firebaseapp.com",
  projectId: "fyp-b7d8e",
  storageBucket: "fyp-b7d8e.appspot.com",
  messagingSenderId: "397456128748",
  appId: "1:397456128748:web:a261e39055a538f02283c9",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
