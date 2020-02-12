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
