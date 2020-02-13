const campContentInfo = document.getElementById("camp-content-info");
const searchParams = new URLSearchParams(window.location.search);
const query_id = searchParams.get("id");

function myFunction(x) {
  x.classList.toggle("change");

  const div = document.getElementById("dropdown");
  div.style.visibility =
    div.style.visibility == "hidden" ? "visible" : "hidden";
}

fetch(`http://localhost:3000/parks/${query_id}`)
  .then(response => response.json())
  .then(park => {
    console.log(park);
    let h2 = document.createElement("h2");
    h2.innerHTML = `${park.name} - ${park.designation} <p class="camp-description">${park.description}</p>`;
    campContentInfo.append(h2);

    if (park.campgrounds.length != 0) {
      park.campgrounds.map(campground => {
        let li = document.createElement("li");
        li.innerHTML = `<a href=http://localhost:3001/campground-info-page.html?id=${campground.id}>${campground.name}</a>`;

        campContentInfo.appendChild(li);
      });
    }
  });
