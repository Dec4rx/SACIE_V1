import {getDatabase} from "firebase/database";
import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";

const app= initializeApp(firebaseConfig);

export const db= getDatabase(app);
