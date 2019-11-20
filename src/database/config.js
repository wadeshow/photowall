import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAjWuRn-51KCH-KX79ctVXuTLk08Zuj-kM",
  authDomain: "photowall-24bb0.firebaseapp.com",
  databaseURL: "https://photowall-24bb0.firebaseio.com",
  projectId: "photowall-24bb0",
  storageBucket: "photowall-24bb0.appspot.com",
  messagingSenderId: "648216111227",
  appId: "1:648216111227:web:5b2d6253daf2903ea81ade"
};
// Initialize Firebase
firebase.initializeApp(config);

  const database = firebase.database()

  export {database}

              
