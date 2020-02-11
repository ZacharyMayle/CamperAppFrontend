fetch("http://localhost:3002/users")
  .then(response => response.json())
  .then(users => {
    users.map(user => {
      let box = document.getElementById("modalBox");
      box.innerHTML = `${user.first_name} ${user.last_name}`;
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
