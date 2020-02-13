const campContentInfo = document.getElementById("camp-content-info");
const searchParams = new URLSearchParams(window.location.search);
const query_id = searchParams.get("id");

function myFunction(x) {
  // const dropdown = document.querySelector("#dropdown")
  x.classList.toggle("change");

  const div = document.getElementById("dropdown");
  div.style.visibility =
    div.style.visibility == "hidden" ? "visible" : "hidden";
}

fetch(`http://localhost:3000/parks/${query_id}`)
  .then(response => response.json())
  .then(park => {
    console.log(park);
    let h3 = document.createElement("h3");
    h3.innerHTML = `${park.name} - ${park.designation} <p class="camp-description">${park.description}</p>`;
    campContentInfo.append(h3);

    if (park.campgrounds.length != 0) {
      park.campgrounds.map(campground => {
        let li = document.createElement("li");
        li.innerHTML = `<a href=http://localhost:3001/campground-info-page.html?id=${campground.id}>${campground.name}</a>`;

        campContentInfo.appendChild(li);
      });
    }
  });
