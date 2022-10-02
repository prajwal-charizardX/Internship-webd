import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNnLrMU5PzQyFloDUd6OcoNibenxUf2BI",
  authDomain: "panchami-associates.firebaseapp.com",
  databaseURL: "https://panchami-associates-default-rtdb.firebaseio.com",
  projectId: "panchami-associates",
  storageBucket: "panchami-associates.appspot.com",
  messagingSenderId: "457702218897",
  appId: "1:457702218897:web:103523a4347f76c3b17330",
  measurementId: "G-1C7LL6GWRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
