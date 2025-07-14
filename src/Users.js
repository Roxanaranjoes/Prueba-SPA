const apiUrl = "http://localhost:3000/users";
let users = [];

export async function initApp(container, currentUser) {
  const isAdmin = currentUser?.role === "admin";

  container.innerHTML = `
    <main>
      <div class="topbar">
        <h2>Visitors</h2>
        <div class="topbar-right">
          <input type="search" id="search" class="search-input" placeholder="Buscar..." />
          ${isAdmin ? '<button class="add-user-btn" id="btnAdd">ADD NEW USER</button>' : ""}
        </div>
      </div>
      <div class="user-list">
        <div class="user-list-header">
          <div></div>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>date</div>
          <div></div>
        </div>
        <div id="userList"></div>
      </div>
    </main>

    <div class="form-popup" id="userForm" style="display: none;">
      <input type="hidden" id="editId" />
      <input type="text" id="name" placeholder="name" />
      <input type="email" id="email" placeholder="email" />
      <input type="date" id="dateOfAdmission" />
      ${isAdmin ? `
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" placeholder="password" />
      ` : ""}
      <button id="saveBtn">Save</button>
      <button id="cancelBtn">Cancel</button>
    </div>
  `;

  if (isAdmin) {
    document.getElementById("btnAdd").addEventListener("click", openForm);
    document.getElementById("saveBtn").addEventListener("click", () => saveUser(isAdmin));
    document.getElementById("cancelBtn").addEventListener("click", closeForm);
  }

  document.getElementById("search").addEventListener("input", filterUsers);
  loadUsers(isAdmin);
}

function openForm() {
  document.getElementById("editId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dateOfAdmission").value = "";

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  if (usernameInput && passwordInput) {
    usernameInput.value = "";
    passwordInput.value = "";
  }

  document.getElementById("userForm").style.display = "block";
}

function closeForm() {
  document.getElementById("userForm").style.display = "none";
}

function renderUsers(list = users, isAdmin = false) {
  const el = document.getElementById("userList");
  el.innerHTML = "";

  list.forEach(user => {
    const div = document.createElement("div");
    div.className = "user";

    div.innerHTML = `
      <img src="imgs/Imagen pegada.png" alt="User" />
      <div>${user.name}</div>
      <div>${user.email}</div>
      <div>${user.dateOfAdmission}</div>
      <div class="actions"></div>
    `;

    const actionsDiv = div.querySelector(".actions");

    if (isAdmin) {
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.addEventListener("click", () => editUser(user.id));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.addEventListener("click", () => deleteUser(user.id));

      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(deleteBtn);
    }

    el.appendChild(div);
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10,15}$/.test(phone);
}

function saveUser(isAdmin) {
  const id = document.getElementById("editId").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const dateOfAdmission = document.getElementById("dateOfAdmission").value;

  let username = "", password = "";
  if (isAdmin) {
    username = document.getElementById("username").value.trim();
    password = document.getElementById("password").value.trim();
    if (!username || !password) return alert("Username and password are required");
  }

  if (!name || !email || !dateOfAdmission)
    return alert("All fields are required");

  if (!validateEmail(email)) return alert("Invalid email");


  const newUser = {
    name,
    email,
    dateOfAdmission,
    role: "user"
  };

  if (isAdmin) {
    newUser.username = username;
    newUser.password = password;
  }

  if (id) {
    fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: parseInt(id), ...newUser })
    }).then(() => loadUsers(true));
  } else {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (isAdmin && data.find(u => u.username === username)) {
          return alert("That username already exists");
        }

        fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser)
        }).then(() => loadUsers(true));
      });
  }

  closeForm();
}

function editUser(id) {
  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById("editId").value = user.id;
      document.getElementById("name").value = user.name;
      document.getElementById("email").value = user.email;
      document.getElementById("dateOfAdmission").value = user.dateOfAdmission;

      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      if (usernameInput) usernameInput.value = user.username || "";
      if (passwordInput) passwordInput.value = user.password || "";

      document.getElementById("userForm").style.display = "block";
    });
}

function deleteUser(id) {
  fetch(`${apiUrl}/${id}`, { method: "DELETE" }).then(() => loadUsers(true));
}

function loadUsers(isAdmin = false) {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      users = data;
      renderUsers(users, isAdmin);
    });
}

function filterUsers(e) {
  const q = e.target.value.toLowerCase();
  const filtered = users.filter(u => u.name.toLowerCase().includes(q));
  const currentUser = JSON.parse(localStorage.getItem("user"));
  renderUsers(filtered, currentUser?.role === "admin");
}
