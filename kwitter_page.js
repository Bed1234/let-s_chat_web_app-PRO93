// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA8EepdGd8on_DGn09k_OIYn6jfNPpY74c",
      authDomain: "let-s-chat-web-app-85e53.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-85e53-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-85e53",
      storageBucket: "let-s-chat-web-app-85e53.appspot.com",
      messagingSenderId: "616707750010",
      appId: "1:616707750010:web:bdcac789be554b4a06a3c3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    


  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];

        name_tag = "<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
        message_tag = "<h4 class='message_h4'>"+message+"</h4>";
        like_btn = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
        span_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";


        row= name_tag+message_tag+like_btn+span_tag;
        document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function updateLike(message_id) {
      btn_id = message_id;
      likes = document.getElementById(btn_id).value;
      updated_likes = Number(likes)+1;


      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes

      });
}




function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
   
   }
   

   
function logout2() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
   
   }
   
