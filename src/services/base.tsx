// Import the functions you need from the SDKs you need
import exp from 'constants';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCzAZvLvz_oVyPeDmYzUK6rd6R5luJunXI',
  authDomain: 'oursources-98138.firebaseapp.com',
  projectId: 'oursources-98138',
  storageBucket: 'oursources-98138.appspot.com',
  messagingSenderId: '168201814654',
  appId: '1:168201814654:web:46ac6650c09a6fb47fce2f',
  measurementId: 'G-CCT1LBC98K',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
