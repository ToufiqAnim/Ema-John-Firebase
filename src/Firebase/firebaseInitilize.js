import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBaseCOnfig"


const AuthenticationInitilize = () =>{
    initializeApp(firebaseConfig)
}
export default AuthenticationInitilize;