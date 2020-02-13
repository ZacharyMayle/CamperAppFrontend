const contentInfo = document.getElementById("content-info");
const userInfo = document.getElementById("user-info");
const searchParams = new URLSearchParams(window.location.search);
const query_user = searchParams.get("user_id");

function myFunction(x) {
  // const dropdown = document.querySelector("#dropdown")
  x.classList.toggle("change");

  const div = document.getElementById("dropdown");
  div.style.visibility =
    div.style.visibility == "hidden" ? "visible" : "hidden";
}

fetch("http://localhost:3000/user_campgrounds/")
  .then(response => response.json())
  .then(reservations => {
    // console.log(reservations)
    let user_res = reservations
      .filter(reservation => {
        return reservation.user_id == query_user;
      })
      .map(stays => {
        console.log(stays);
        let li = document.createElement("li");
        li.innerText = `${stays.campground.name} - Duration of Camping: ${stays.camping_duration}`;
        userInfo.appendChild(li);
      });
  });

fetch("http://localhost:3000/parks")
  .then(response => response.json())
  .then(parks => {
    parks.map(park => {
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      li2.innerText = `
        Campgrounds Available: ${park.campgrounds.length}
      `;

      li1.innerHTML = `
        <a href ='parks-with-camps.html?id=${park.id}'> ${park.name} - ${park.designation}</a> 
      `;

      li1.class = "li-1";
      li2.class = "li-2";

      contentInfo.appendChild(li1);
      li1.appendChild(li2);
    });
  });
