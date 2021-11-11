import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase = () => {
	initializeApp(firebaseConfig);
// console.log(process.env.REACT_APP_API_KEY)

}

export default initializeFirebase;