
const firebaseConfig = {
  apiKey: "AIzaSyAdTYKm8Lfj3owWykdpE4IoceKd82KqIr0",
  authDomain: "mytestapp-ee04d.firebaseapp.com",
  projectId: "mytestapp-ee04d",
  storageBucket: "mytestapp-ee04d.appspot.com",
  messagingSenderId: "184555015600",
  appId: "1:184555015600:web:32cf547aa8b29d1ee49a75",
  measurementId: "G-T73QPBYNFS"
};

// Инициализация
firebase.initializeApp(firebaseConfig);

// Получаем Firestore
const db = firebase.firestore();

