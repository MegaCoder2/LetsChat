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
room = localStorage.getItem("room_name")
function logout()
{
      localStorage.removeItem("Username")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
function send()
{
    message = document.getElementById("messagebox").value
    firebase.database().ref(room).push({
        name: user,
        message: message,
        like: 0
    })
    document.getElementById("messsagebox").value = ""
}