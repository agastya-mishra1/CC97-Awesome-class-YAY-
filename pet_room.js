// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWOaEDgQu-4l5vc9eBjCiTIFfvtujen_Q",
  authDomain: "kwitter-e7b3a.firebaseapp.com",
  databaseURL: "https://kwitter-e7b3a-default-rtdb.firebaseio.com",
  projectId: "kwitter-e7b3a",
  storageBucket: "kwitter-e7b3a.appspot.com",
  messagingSenderId: "1045721073130",
  appId: "1:1045721073130:web:801948b81310d211555e93"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  pass_word = localStorage.getItem("Password");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"Adding A Room Name"  
});  
localStorage.setItem("room_name",room_name);
window.location="pet_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("Room Names "+Room_names);
row="<div class='room_name'id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();
function redirect(names){
localStorage.setItem("room_name",names);
window.location="pet_page.html";      
}
function logout(){
localStorage.removeItem("Username");      
localStorage.removeItem("room_name");
localStorage.removeItem("Password");
window.location="index.html";  
}
