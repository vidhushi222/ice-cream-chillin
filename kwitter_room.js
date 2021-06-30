var firebaseConfig = {
      apiKey: "AIzaSyDkoDzCMdT3ywlniCpxcw1CiKhXghiIkfk",
      authDomain: "lets-chat-ca94a.firebaseapp.com",
      databaseURL: "https://lets-chat-ca94a-default-rtdb.firebaseio.com",
      projectId: "lets-chat-ca94a",
      storageBucket: "lets-chat-ca94a.appspot.com",
      messagingSenderId: "484152811226",
      appId: "1:484152811226:web:c1c5a4c77747876e874fe3",
      measurementId: "G-9E96736V3J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addroom() {

      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({

            purpose: "adding roomname"
      });

      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; } function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }