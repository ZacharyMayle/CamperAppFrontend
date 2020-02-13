fetch("http://localhost:3000/parks")
  .then(response => response.json())
  .then(parks => {
    parks.map(park => {
        // console.log(park.name, park.designation, park.latlong, park.id)
        let array = park.latlong.split(" ")
        // console.log("label1", array)
        let split_latlong = array.map(element =>{
            const both = element.split(":")[1]
            return both
        })
        // console.log(split_latlong)
        const lat = split_latlong[0].substring(0, split_latlong[0].length - 1);
        // console.log(("latlabel"), lat)
        const long = split_latlong[1];
        // console.log(("longlabel"), long)
        const latLongArray = [lat, long]
        console.log(latLongArray)
    
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      let marker = L.marker([latLongArray[0],latLongArray[1]])
        .addTo(mymap)
        .bindPopup(`<a href ='parks-with-camps.html?id=${park.id}'> ${park.name} - ${park.designation}</a>`)
        .openPopup();
      li2.innerText = `
        Campgrounds Available: ${park.campgrounds.length}
      `;

      li1.innerHTML = `
        <a class="aTagInContentInfo" href ='parks-with-camps.html?id=${park.id}'> ${park.name} - ${park.designation}</a> 
      `;
      li1.class = "li-1";
      li2.class = "li-2";
    //   console.log(li1, li2);
      //   contentInfo.appendChild(li1);
      //   li1.appendChild(li2);
    });
  });

var mymap = L.map("mapid").setView([39.76897, -104.97425], 8);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken:
      "pk.eyJ1IjoiYWpzaGFwcHkiLCJhIjoiY2s2bDE2Y25hMGFjcTNqbnY4c2I2ZDVsciJ9.yD1mgRvqruiHZf6pG_DNJQ"
  }
).addTo(mymap);

var marker = L.marker([38.072971, -103.398628])
  .addTo(mymap)
  .bindPopup(`<a href="http://www.google.com">Hey!</a>`)
  .openPopup();
