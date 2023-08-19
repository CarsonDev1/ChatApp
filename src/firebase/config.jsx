// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB49oFwQ7ZDUZVSY-X5S8gU6JoZ0R8AzZc',
	authDomain: 'chat-app-62bcd.firebaseapp.com',
	projectId: 'chat-app-62bcd',
	storageBucket: 'chat-app-62bcd.appspot.com',
	messagingSenderId: '472253470639',
	appId: '1:472253470639:web:b799a1687f59a865fd015a',
	measurementId: 'G-JH2LCBP1FG',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
	auth.useEmulator('http://localhost:9099');
	db.useEmulator('localhost', '8082');
}

export { db, auth };
export default firebase;
