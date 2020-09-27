  
    function createPost() {
    console.log("hi");
    var subject1 = document.getElementById("subject").value;
    var msg1 = document.getElementById("message").value;

        alert(subject1);
        alert(msg1);
       // if the current user logged in user
      // is authenticated, then grab "uid" "displayName" and "email"
      // use "set()" with merge (if document did not exist it will be created)

     
          db.collection("postings").doc(subject1).set({
              description: subject1,
              title: msg1,
          }, {
              merge: true
          });
    }
