function checkAuthStatus() {
  const userName = localStorage.getItem('userName');

  const authContainer = document.querySelector('.header__auth');

  if (userName) {
    authContainer.innerHTML = `
      <span class="logged-in">${userName}</span>
      <button id="logoutButton">Выйти</button>
    `;
    document.getElementById('logoutButton').addEventListener('click', logout);
  } else {
    authContainer.innerHTML = `
      <input type="text" id="usernameInput" placeholder="Логин" />
      <input type="password" id="passwordInput" placeholder="Пароль" />
      <button id="loginButton">Войти</button>
    `;
    document.getElementById('loginButton').addEventListener('click', function () {
      const username = document.getElementById('usernameInput').value;
      setAuthStatus(username);
    });
  }

  authContainer.classList.add('show');
}

function setAuthStatus(username) {
  localStorage.setItem('userName', username);
  window.location.reload();
}

function logout() {
  localStorage.removeItem('userName');
  window.location.reload();
}

document.addEventListener('DOMContentLoaded', checkAuthStatus);
