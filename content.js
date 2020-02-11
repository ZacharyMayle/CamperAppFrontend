const userInfo = document.getElementById("user-info")
console.log("hello", userInfo)

fetch("http://localhost:3000/user_campgrounds")
  .then(response=>response.json())
  // .then(response => console.log(response))
  .then(user_campgrounds => {
    user_campgrounds.map(reservation =>{
      let li = document.createElement('li');
      li.innerText = `${reservation.campground.name} - ${reservation.camping_duration}`;
      console.log(reservation)
      console.log(li);
      userInfo.appendChild(li)
    })
  })