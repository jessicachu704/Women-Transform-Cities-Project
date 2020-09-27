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
   var cat = ["all", "health", "career", "finance", "education"];
  function getCatePosts(d){
    console.log("Cate: " + cat[d] )
    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("postings")
      .get()
      .then(function(querySnapshot) {
        let box = document.getElementById("thoughts");
        box.innerHTML = "";
          querySnapshot.forEach(function(doc) {             
            let title= doc.data().title;
            let description = doc.data().description;
            let category = doc.data().category;
            let dateposted= doc.data().dateposted.toDate();
            let likes= doc.data().likes;
            let userid= doc.data().userid;
            let docid = doc.id;
            
            if(d == 0){
              createPost(title, description, category, dateposted, likes, userid, docid);
            }
            else{
            if((strcmp(cat[d], category)) == 0 ){
              createPost(title, description, category, dateposted, likes, userid, docid);
            }
          }
            
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  
  })

  function strcmp(a, b)
  {   
      return (a<b?-1:(a>b?1:0));  
  }
  
  }
  function getPosts() {
    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("postings")
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              
            let title= doc.data().title;
            let description = doc.data().description;
            let category = doc.data().category;
            let dateposted= doc.data().dateposted.toDate();
            let likes= doc.data().likes;
            let userid= doc.data().userid;
            let docid = doc.id;
            createPost(title, description, category, dateposted, likes, userid, docid);
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  
  })
  
}
  function createPost(title, description, category, dateposted, likes, userid, docid ) {
    let box = document.getElementById("thoughts");
    let sect = document.createElement("div");
    let col = document.createElement("div");
    let colBox = document.createElement("div");
    let cate =  document.createElement("p");
    let head = document.createElement("h4");
    let paragraph = document.createElement("p");
    let like = document.createElement("button");
    let date = document.createElement("p");
    let br = document.createElement("br");
    let button = document.createElement("button");

    col.setAttribute("class","col-lg-4 col-md-6 d-flex align-items-stretch");
    col.setAttribute("data-aos","zoom-in");
    col.setAttribute("data-aos-delay","100");
    button.setAttribute("type", "button");
    colBox.setAttribute("class", "icon-box");
    sect.setAttribute("class","section-title");
    button.setAttribute("class", "get-started-btn");
    like.setAttribute("class", "get-started-btn");
//like button
    like.addEventListener('click', function () {
        console.log("I LIKE!"); // need to increment like on db.collection
  })
//delete button
    button.addEventListener('click', function () {
      console.log("Hi! doc id: " + docid);
      db.collection("postings").doc(docid).delete().then(function() {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  })
    
    cate.innerHTML = category;
    paragraph.innerHTML = description;
    head.innerHTML = title;
    like.innerHTML = likes + " ❤";
    button.innerHTML = "Delete"
    date.innerHTML = "Last updated: " + dateposted.toLocaleString();
    
    sect.appendChild(cate);
    colBox.appendChild(sect);
    colBox.appendChild(head);
    colBox.appendChild(paragraph);
    colBox.appendChild(br);
    colBox.appendChild(like);
    colBox.appendChild(button);
    colBox.appendChild(date);
    col.appendChild(colBox);
    box.appendChild(col);
    console.log("Created i guess?");

  }

  function del(){




  }