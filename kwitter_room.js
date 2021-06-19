
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

  

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";
 

 function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="Kwitter_page.html";
 }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  room = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+Room_names + "</div><hr>";
  document.getElementById("output").innerHTML+= room;


  //End code
  });});}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name",name);
  window.location="Kwitter_page.html";
}



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

function logOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}
  
