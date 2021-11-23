
const firebaseConfig = {
      apiKey: "AIzaSyAMsl-x8qvZkb3RL2-zAPxMN9ZsOK7l4wQ",
      authDomain: "kwitter-ccea5.firebaseapp.com",
      databaseURL: "https://kwitter-ccea5-default-rtdb.firebaseio.com",
      projectId: "kwitter-ccea5",
      storageBucket: "kwitter-ccea5.appspot.com",
      messagingSenderId: "312514588094",
      appId: "1:312514588094:web:12d27023fe9f93d06d1def",
      measurementId: "G-94BRTH17RR"
    };
firebase.initializeApp(firebaseConfig)
var user = localStorage.getItem("Username")
document.getElementById("Username").innerHTML = "Welcome " + user + "!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addroom()
{
      room = document.getElementById("roomadd").value
      firebase.database().ref("/").child(room).update({
            purpose: "adduser"
      })
      localStorage.setItem("room", room)
}