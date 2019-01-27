const users = require('../usersData');

function showUserInfo(id) {
  let user = users.filter(user => user.id === id)[0];

  let html = `
        <html>
            <head>
            <link rel="stylesheet" href="/style.css" />
            </head>

            <body>
            <h1 class="title"><a href="/">Home</a></h1>
            <a href="/users">Users</a>

            <div class="user-details">${user.id}</div>
            </body>
        </html>
    `;
}

module.exports = showUserInfo;
