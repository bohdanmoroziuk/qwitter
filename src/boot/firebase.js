import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCkoa4SZs9HmZW8uljL_sdF3Q_WK4ktafA',
  authDomain: 'qwitter-abcb2.firebaseapp.com',
  projectId: 'qwitter-abcb2',
  storageBucket: 'qwitter-abcb2.appspot.com',
  messagingSenderId: '204694337150',
  appId: '1:204694337150:web:c8d1f48d6ad884f243ca2f',
};

firebase.initializeApp(config);

export default firebase.firestore();
