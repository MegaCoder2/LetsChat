var user
function adduser()
{
    user = document.getElementById("Username").value
    localStorage.setItem("Username", user)
    window.location = "/kwitter_room.html"
}