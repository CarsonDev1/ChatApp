// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
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
const app = initializeApp(firebaseConfig);
getAnalytics(app);
