const campgroundInfo = document.getElementById("campground-info");
const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("id");

fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3>${campground.name}</h3> <p class="camp-description">${campground.description} \n\nTotal Sites: ${campground.total_sites}</p>`;
    campgroundInfo.appendChild(li);
  });
