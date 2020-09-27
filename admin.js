$(document).ready(function () {
    updateUsername();
    getPosts();
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
  
  function getPosts() {
    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("postings")
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              
              let title= doc.data().title;
              let description = doc.data().description;
              let category = doc.data().category;
              let dateposted= doc.data().dateposted;
              let likes= doc.data().likes;
              let userid= doc.data().userid;
              console.log(category , title, description);
              createPost(title, description, category, dateposted, likes);

              

          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  
  })
  
}
  function createPost(title, description, category, dateposted, likes) {
    let box = document.getElementById("thoughts");
    let col = document.createElement("div");
    let colBox = document.createElement("div");
    let heading1 =  document.createElement("h4");
    let heading2 = document.createElement("h4");
    let paragraph = document.createElement("p");
    let like = document.createElement("p");
    let date = document.createElement("p");
    let button = document.createElement("button");

    col.setAttribute("class","col-lg-4 col-md-6 d-flex align-items-stretch");
    col.setAttribute("data-aos","zoom-in");
    col.setAttribute("data-aos-delay","100");
    button.setAttribute("type", "button");
    colBox.setAttribute("class", "icon-box");
    heading1.innerHTML = title;
    paragraph.innerHTML = description;
    heading2.innerHTML = category;
    like.innerHTML = likes + " likes";
    button.innerHTML = "Delete"
    date.innerHTML = dateposted.toDate();
    colBox.appendChild(heading1);
    colBox.appendChild(heading2);
    colBox.appendChild(paragraph);
    colBox.appendChild(like);
    colBox.appendChild(date);
    colBox.appendChild(button);
    col.appendChild(colBox);
    box.appendChild(col);

  }