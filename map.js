fetch("http://localhost:3000/parks")
	.then(response => response.json())
	.then(parks => {
		parks.map(park => {
			let array = park.latlong.split(" ");
			let split_latlong = array.map(element => {
				const both = element.split(":")[1];
				return both;
			});
			const lat = split_latlong[0].substring(0, split_latlong[0].length - 1);
			const long = split_latlong[1];
			const latLongArray = [lat, long];

			let li1 = document.createElement("li");
			let li2 = document.createElement("li");
			let marker = L.marker([latLongArray[0], latLongArray[1]])
				.addTo(mymap)
				.bindPopup(
					`
						<a href ='parks-with-camps.html?id=${park.id}'>
								${park.name} - ${park.designation}\n\n
								<p class="link-tags" style="color:red">Available Campgrounds: ${park.campgrounds.length}</p>
						</a>
				 `
				)
				.openPopup();
			// li2.innerText = `
			// 	Campgrounds Available: ${park.campgrounds.length}
			// `;

			// li1.innerHTML = `
			// 	<a class="aTagInContentInfo" href ='parks-with-camps.html?id=${park.id}'> ${park.name} - ${park.designation}</a> 
			// `;
			// li1.class = "li-1";
			// li2.class = "li-2";
		});
	});

var mymap = L.map("mapid").setView([39.76897, -104.97425], 6);
// L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox/streets-v11",
//     accessToken:
//       "pk.eyJ1IjoiYWpzaGFwcHkiLCJhIjoiY2s2bDE2Y25hMGFjcTNqbnY4c2I2ZDVsciJ9.yD1mgRvqruiHZf6pG_DNJQ"
//   }
// ).addTo(mymap);

var Stamen_TerrainBackground = L.tileLayer(
	"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}",
	{
		attribution:
			'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: "abcd",
		minZoom: 0,
		maxZoom: 18,
		ext: "png"
	}
).addTo(mymap);

// var Thunderforest_SpinalMap = L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
// 	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	apikey: '<your apikey>',
// 	maxZoom: 22
// }).addTo(mymap);

var marker = L.marker([38.072971, -103.398628])
	.addTo(mymap)
	.bindPopup(`<a href="http://www.google.com">Hey!</a>`)
	.openPopup();
