
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCnpiFpQKuQc1ce9YOrJCeERMprP9E3pA0",
      authDomain: "kwitter-49455.firebaseapp.com",
      databaseURL: "https://kwitter-49455-default-rtdb.firebaseio.com",
      projectId: "kwitter-49455",
      storageBucket: "kwitter-49455.appspot.com",
      messagingSenderId: "729869635327",
      appId: "1:729869635327:web:5ffc4b7a7d63222e8f86ca"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
