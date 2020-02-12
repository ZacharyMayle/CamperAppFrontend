const campgroundInfo = document.getElementById("campground-info");
const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("id");

fetch(`http://localhost:3000/campgrounds/${query}`)
    .then(response => response.json())
    .then(campground => {
        console.log(campground)
        let li = document.createElement('li')
        li.innerHTML = `${campground.name} <p class="camp-description">${campground.description}</p>`
        campgroundInfo.appendChild(li)
    })