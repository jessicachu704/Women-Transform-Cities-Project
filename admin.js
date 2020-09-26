$(document).ready(function () {
    updateUsername();

  });
  
  function updateUsername() {
    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("admin").doc(user.uid)
        .onSnapshot(function (snap) {
  
          let username = snap.data().name;
          if (username.indexOf(' ') <= 0) {
            document.getElementById('username').innerHTML = username;
          } else {
            document.getElementById('username').innerHTML = username.substring(0, username.indexOf(" "));
          }
        });
    });
  };
  
 