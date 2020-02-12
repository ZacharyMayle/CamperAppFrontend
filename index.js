const userList = document.getElementById("list");
fetch("http://localhost:3005/states.json")
  .then(response => response.json())
  .then(states =>
    Object.keys(states).map(state => {
      let option = document.createElement("option");
      let select = document.querySelector("select");
      option.value = state;
      option.innerText = state;
      select.appendChild(option);
    })
  );
fetch("http://localhost:3000/users")
  .then(response => response.json())
  .then(users => {
    // console.log(users)
    users.map(user => {
      let li = document.createElement("li");
      li.innerHTML = `${user.first_name} ${user.last_name}`;
      userList.append(li);
    });
  });
document.getElementById("existingUser").addEventListener("click", function() {
  let list = document.getElementById("modalBox");
  list.style.visibility =
    list.style.visibility == "visible" ? "hidden" : "visible";
});
document.getElementById("newUser").addEventListener("click", function() {
  let form = document.getElementById("modalForm");
  form.style.visibility =
    form.style.visibility == "visible" ? "hidden" : "visible";
});


//            Controls for the hamburger

function myFunction(x) {
    x.classList.toggle("change");
  }

