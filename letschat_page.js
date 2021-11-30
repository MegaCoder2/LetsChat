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
var name = ""
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
    function getData() 
    {
          firebase.database().ref("/"+room).on('value', function(snapshot)
           {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function(childSnapshot) 
                {
                      childKey = childSnapshot.key;
                      childData = childSnapshot.val();
                      if(childKey != "purpose")
                      {
                      firebase_message_id = childKey
                      message_data = childData
                      console.log(firebase_message_id)
                      console.log(message_data)
                      Name = message_data["name"]
                      message = message_data["message"]
                      like = message_data["like"]
                      namewithtag = "<h4>"+Name+"<img src='tick.png' class='user_tick'></h4>"
                      messagewithtag = "<h4 class='message_h4'>"+message+"</h4>"
                      buttonwithtag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
                      spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>"
                      row = namewithtag + messagewithtag + buttonwithtag + spanwithtag
                      document.getElementById("output").innerHTML += row
                      console.log("row")
                      }
                })
           })
    }
getData()
function updatelike(message_id)
{
    button_id = message_id
    likes = document.getElementById(button_id).value
    updatelikes = Number(likes) + 1
    firebase.database().ref(room).child(message_id).update({
        like: updatelikes
    })
}