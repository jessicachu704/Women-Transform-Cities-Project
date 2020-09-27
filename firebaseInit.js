const firebaseConfig = {
  apiKey: "AIzaSyDrYvuZWkB45Vl1ZEhOeMokqWGCe4AhIDo",
  authDomain: "wtcfeature.firebaseapp.com",
  databaseURL: "https://wtcfeature.firebaseio.com",
  projectId: "wtcfeature",
  storageBucket: "wtcfeature.appspot.com",
  messagingSenderId: "1035824439194",
  appId: "1:1035824439194:web:86ab993dedffd8d92fa423"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();