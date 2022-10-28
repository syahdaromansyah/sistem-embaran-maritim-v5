import '../../styles/global.css';
/* eslint-disable */

const userList = (userData) => {
  return `<tr class="bg-sky-200 h-16">
    <td>${userData.no}</td>
    <td>${userData.name}</td>
    <td>${userData.username}</td>
    <td>${userData.agency}</td>
    <td>${userData.role}</td>
    <td>
      <button
        type="button"
        class="update-user-btn mr-2 border-none bg-transparent"
        data-update-username="${userData.username}"
      >
        <i
          class="fa-solid fa-pen-to-square"
          style="color: rgb(41, 41, 71)"
        ></i>
      </button>
      <button
        type="button"
        class="delete-user-btn border-none bg-transparent"
        data-delete-username="${userData.username}"
      >
        <i class="material-icons">&#xE872;</i>
      </button>
    </td>
  </tr>`;
};

const countResult = document.querySelector('.count-result');
const tableUsers = document.querySelector('.table-users');

const users = JSON.parse(window.localStorage.getItem('users'));

const totalUsers = users.length;
if (countResult) {
  countResult.textContent = `Count: ${totalUsers}`;
}

users.forEach((user, idx) => {
  tableUsers.insertAdjacentHTML(
    'beforeend',
    userList({
      no: idx + 1,
      ...user,
    })
  );
});

document.addEventListener('click', (e) => {
  const elementTarget = e.target;
  const btnUpdateUser = elementTarget.closest('[data-update-username]')?.dataset
    .updateUsername;
  const btnDeleteUser = elementTarget.closest('[data-delete-username]')?.dataset
    .deleteUsername;

  if (btnUpdateUser) {
    window.localStorage.setItem('current-change-user', btnUpdateUser);
    window.location.href = '/pages/user-manage/update_user/';
  }

  if (btnDeleteUser) {
    const users = JSON.parse(window.localStorage.getItem('users'));
    const updateUsers = users.filter((user) => user.username !== btnDeleteUser);

    window.localStorage.setItem('users', JSON.stringify(updateUsers));

    while (tableUsers.hasChildNodes()) {
      tableUsers.removeChild(tableUsers.firstChild);
    }

    updateUsers.forEach((user, idx) => {
      tableUsers.insertAdjacentHTML(
        'beforeend',
        userList({
          no: idx + 1,
          ...user,
        })
      );
    });

    countResult.textContent = `Count: ${updateUsers.length}`;
  }
});

const isLogin = window.localStorage.getItem('current-user-name');
if (isLogin === '') {
  window.location.replace('/');
}
