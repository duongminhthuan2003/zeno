import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBu6mcjxRQ4H9KL4w2KYZHCSBEJ9adDCIc',
    authDomain: 'zeno-8939d.firebaseapp.com',
    projectId: 'zeno-8939d',
    storageBucket: 'zeno-8939d.firebasestorage.app',
    messagingSenderId: '607527436522',
    appId: '1:607527436522:web:ac854d279a7831a5ab1793',
    measurementId: 'G-8M6BX3WSB0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
