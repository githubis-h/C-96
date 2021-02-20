var firebaseConfig = {
      apiKey: "AIzaSyDtUHQS-nS8s05x5QKbBedeQMMkxMXHVh0",
      authDomain: "kwitter-db82c.firebaseapp.com",
      databaseURL: "https://kwitter-db82c-default-rtdb.firebaseio.com",
      projectId: "kwitter-db82c",
      storageBucket: "kwitter-db82c.appspot.com",
      messagingSenderId: "208339594791",
      appId: "1:208339594791:web:defc61c098c7ab5736e802",
      measurementId: "G-PR112H0YYG"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
      } });  }); }
getData();
