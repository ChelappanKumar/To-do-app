var firebaseConfig = {
    apiKey: "AIzaSyAaFFd0hoRBc9BYNOKVRZaaE5pVcEnzXY8",
    authDomain: "to-do-live-692da.firebaseapp.com",
    projectId: "to-do-live-692da",
    storageBucket: "to-do-live-692da.appspot.com",
    messagingSenderId: "96671514406",
    appId: "1:96671514406:web:d690044e66f69dc369cbe7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 
  var db = firebase.firestore(); 