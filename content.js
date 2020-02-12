const userInfo = document.getElementById("user-info");
const contentInfo = document.getElementById("content-info");
const campContentInfo = document.getElementById("camp-content-info");
const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("id");

fetch("http://localhost:3000/user_campgrounds")
  .then(response => response.json())
  .then(user_campgrounds => {
    user_campgrounds.map(reservation => {
      let li = document.createElement("li");
      li.innerText = `${reservation.campground.name} - ${reservation.camping_duration}`;
      userInfo.appendChild(li);
    });
  });

fetch("http://localhost:3000/parks")
  .then(response => response.json())
  .then(parks => {
    parks.map(park => {
      let li = document.createElement("li");
      li.innerHTML = `<a href ='content.html?id=${park.id}'> ${park.name} - ${park.designation}</a>`;

      contentInfo.appendChild(li);
    });
  });

window.addEventListener("load", function() {
  if (window.location.href != "http://localhost:3005/content.html") {
    let list1 = document.getElementById("parks");
    let list2 = document.getElementById("park-with-campgrounds");
    list1.style.visibility = "hidden";
    list2.style.visibility = "visible";
  }
});

function someFunction() {
  fetch(`http://localhost:3000/parks/${query}`)
    .then(response => response.json())
    .then(park => {
      console.log(park);
      let h3 = document.createElement("h3");
      h3.innerText = park.name;
      campContentInfo.append(h3);
    //   console.log(park.campgrounds.length)

      if (park.campgrounds.length != 0) {
          park.campgrounds.map(campground =>{
              let li = document.createElement("li");
              li.innerText = `${campground.name}`;
              campContentInfo.appendChild(li);
          })
      }
    });
}

window.addEventListener("load", function() {
  if (window.location.href != "http://localhost:3005/content.html") {
    someFunction();
  }
});
