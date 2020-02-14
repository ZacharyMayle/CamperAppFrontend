const campgroundInfo = document.getElementById("camp-content-div");
const specificCamp = document.getElementById("specific-camp-name");
const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("id");
const descriptionName = document.getElementById("description-name")
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
  h3.className="camp-name-title"
  specificCamp.appendChild(h3)
})

//             Description

fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="description-name">Description</h3> <p class="camp-description">${campground.description} \n\nTotal Sites: ${campground.total_sites}</p>`;
    li.className ="attr-description"
    campgroundInfo.prepend(li);
  });


  //            Weather

  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="weather-name">Weather</h3> <p class="camp-description">${campground.weather}</p>`;
    li.className ="attr-description"
    campgroundInfo.prepend(li);
  });


  //            Wheel Chair Access 
  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="wheel-chair-name">Wheel Chair Access</h3> <p class="camp-description">${campground.wheel_chair}</p>`;
    li.className ="attr-description"
    campgroundInfo.prepend(li);
  });

  //            Cell Phone
  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="cell-phone-name">Cell Reception</h3> <p class="camp-description">${campground.cell_phone}</p>`;
    li.className ="attr-description"
    campgroundInfo.prepend(li);
  });

  //            Fire Stove
  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="fire-stove-name">Fire Stove Policy</h3> <p class="camp-description">${campground.fire_stove}</p>`;
    li.className ="attr-description"
    campgroundInfo.prepend(li);
  });

  //            Toilets
  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="toilets-name">Toilet Information</h3> <p class="camp-description">${campground.toilets}</p>`;
    li.className ="attr-description"
    campgroundInfo.prepend(li);
  });

  //            Showers
  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="showers-name">Shower Information</h3> <p class="camp-description">${campground.showers}</p>`;
    li.className ="attr-description"
    campgroundInfo.prepend(li);
  });

  //            Laundry
  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    li.innerHTML = `<h3 id="laundry-name">Is Laundry Available?</h3> <p class="camp-description">${campground.laundry}</p>`;
    li.className ="attr-description"
    campgroundInfo.prepend(li);
  });

  fetch(`http://localhost:3000/campgrounds/${query}`)
  .then(response => response.json())
  .then(campground => {
    console.log(campground);
    let li = document.createElement("li");
    if (campground.big_foot_sightings == true){
      li.innerHTML = `<h3 id="big-foot-sightings">Big Foot Sightings</h3> <p class="big-foot-description">Ready those cameras! Bigfoot has been sighted here!</p>`;
      li.className ="attr-description"
    } else {
      li.innerHTML = `<h3 id="big-foot-sightings">Big Foot Sightings</h3> <p class="big-foot-description">No current reports of Bigfoot. Check back for updates!</p>`;
      li.className = "attr-description"
    }
    campgroundInfo.prepend(li);
  });
