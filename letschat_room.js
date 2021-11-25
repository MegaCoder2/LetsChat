
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
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot)
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names)
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div><hr>"
       document.getElementById("output").innerHTML += row
      });});}
getData();
function addroom()
{
      room = document.getElementById("roomadd").value
      firebase.database().ref("/").child(room).update({
            purpose: "adduser"
      })
      localStorage.setItem("room", room)
      window.location = "letschat_page.html"
}
function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "letschat_page.html"
}
function logout()
{
      localStorage.removeItem("Username")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}