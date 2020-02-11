fetch("http://localhost:3002/users")
  .then(response => response.json())
  .then(users => {
    users.map(user =>
      document
        .getElementById("existingUser")
        .addEventListener("click", function() {
          document.getElementById(
            "modalBox"
          ).innerHTML = `${user.first_name} ${user.last_name}`;
        })
    );
  });
