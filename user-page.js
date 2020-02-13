const contentInfo = document.getElementById("content-info");
const userInfo = document.getElementById("user-info");
const searchParams = new URLSearchParams(window.location.search);
const query_user = searchParams.get("user_id");

function myFunction(x) {
  x.classList.toggle("change");

  const div = document.getElementById("dropdown");
  div.style.visibility =
    div.style.visibility == "hidden" ? "visible" : "hidden";
}

function checkIfEmpty(array) {
  if (array.length != 0) {
    list_items_array = mapIntoListItems(array);
    return list_items_array;
  } else {
    let li = document.createElement("li");
    li.innerText = `No Current Reservations. Use Park List to navigate possible Campground Reservations!`;
    userInfo.appendChild(li);
  }
}

function mapIntoListItems(array) {
  list_items = array.map(stays => {
    let li = document.createElement("li");
    li.innerText = `${stays.campground.name} - Duration of Camping: ${stays.camping_duration}`;
    li.dataset.id = stays.id;
    li.dataset.duration = stays.camping_duration;
    li.id = stays.id;
    userInfo.appendChild(li);
    let list_item = document.getElementById(stays.id);
    return list_item;
  });
  return list_items;
}

fetch("http://localhost:3000/user_campgrounds/")
  .then(response => response.json())
  .then(reservations => {
    let user_res = reservations.filter(reservation => {
      return reservation.user_id == query_user;
    });
    let return_list_items = checkIfEmpty(user_res);
    user_res.map(reservation => {
      let form = document.createElement("form");
      form.action = `http://localhost:3000/user_campgrounds/${reservation.user_id}`;
      form.method = "POST";
      form.innerHTML = `
        <input type="number" name="camping_duration" placeholder="Duration of stay">
        <input type="submit" value="Change Duration" />
        <input type="hidden" name="_method" value="put" />
        `;
      let list_item = return_list_items.find(item => {
        return item.dataset.id == reservation.id;
      });
      list_item.append(form);
    });
    user_res.map(reservation => {
        let form = document.createElement("form");
        form.action = `http://localhost:3000/user_campgrounds/${reservation.user.id}`;
        form.method = "POST";
        form.innerHTML = `
            <input type="submit" value="Delete Reservation!" />
            <input type="hidden" name="_method" value="delete" />
        `;
        let list_item = return_list_items.find(item => {
          return item.dataset.id == reservation.id;
        });
        list_item.append(form)
    })
  });

fetch("http://localhost:3000/parks")
  .then(response => response.json())
  .then(parks => {
    parks.map(park => {
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      li2.innerText = `
        Campgrounds Available: ${park.campgrounds.length}
      `;

      li1.innerHTML = `
        <a href ='parks-with-camps.html?id=${park.id}'> ${park.name} - ${park.designation}</a> 
      `;
      li1.class = "li-1";
      li2.class = "li-2";

      contentInfo.appendChild(li1);
      li1.appendChild(li2);
    });
  });
