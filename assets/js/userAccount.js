
$(document).ready(function () {
updateUsername();
//  getPosts();
});

function updateUsername() {
firebase.auth().onAuthStateChanged(function (user) {
  db.collection("users").doc(user.uid)
    .onSnapshot(function (snap) {

      let username = snap.data().name;
      let email = snap.data().email;
      document.getElementById('email').innerHTML = email;
      console.log(username);

      if (username.indexOf(' ') <= 0) {
        document.getElementById('username').innerHTML = username;
      } else {
        document.getElementById('username').innerHTML = username.substring(0, username.indexOf(" "));
      }
    });
});
};
function viewMyPost(){
    window.location.replace("myPosts.html");
}
 
  function signout(){
    window.location.replace("index.html");
  }


    
