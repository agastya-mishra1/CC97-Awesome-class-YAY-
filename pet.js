function addUser(){
user_name = document.getElementById("user").value;
pass_word = document.getElementById("pass_word").value;
localStorage.setItem("Username",user_name);
localStorage.setItem("Password",pass_word);
window.location="pet_room.html";    
}