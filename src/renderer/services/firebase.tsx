import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCSgMbGhJIVYac_euE3VinhiFeJWvzQfWo',
  authDomain: 'chat-app-3dc14.firebaseapp.com',
  projectId: 'chat-app-3dc14',
  storageBucket: 'chat-app-3dc14.firebasestorage.app',
  messagingSenderId: '657581381308',
  appId: '1:657581381308:web:7d3cd52a6d499eff74e2b9',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
