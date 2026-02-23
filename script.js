const usersContainer = document.getElementById("users");
const reloadBtn = document.getElementById("reloadBtn");

function displayUsers(users) {
  usersContainer.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
    usersContainer.appendChild(card);
  });
}

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => displayUsers(data))
    .catch((error) => {
      usersContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
    });
}

reloadBtn.addEventListener("click", fetchUsers);

// initial load
fetchUsers();
