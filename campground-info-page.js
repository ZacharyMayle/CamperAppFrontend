const campgroundInfo = document.getElementById("camp-content-div");
const specificCamp = document.getElementById("specific-camp-name");
const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("id");

function myFunction(x) {
  // const dropdown = document.querySelector("#dropdown")
  x.classList.toggle("change");

  const div = document.getElementById("dropdown");
  div.style.visibility =
    div.style.visibility == "hidden" ? "visible" : "hidden";
}


//                 Title of the content

fetch(`http://localhost:3000/campgrounds/${query}`)
.then(response => response.json())
.then(campground => {
  let h3 = document.createElement('h3')
  h3.innerText = `${campground.name} info`
  h3.className="specific-camp-name-h3"
  specificCamp.appendChild(h3)
})

//             Description

fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="description-name">Description</h3> <p class="camp-description">${campground.description} \n\nTotal Sites: ${campground.total_sites}</p>`;
    li.className = "description-list"
    campgroundInfo.prepend(li);
  });


  //            Weather

  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="weather-name">Weather</h3> <p class="camp-description">${campground.weather}</p>`;
    li.className = "weather-list"
    campgroundInfo.prepend(li);
  });


  //            Wheel Chair Access 


  //            Cell Phone


  //            Fire Stove


  //            Toilets


  //            Showers


  //            Laundry

