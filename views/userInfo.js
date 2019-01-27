const users = require('../usersData');

function showUserInfo(id) {
  let user = users.find(user => user.id === id);
  let html = `
        <html>
            <head>
            <link rel="stylesheet" href="/style.css" />
            </head>

            <body>
            <h1 class="title"><a href="/">Home</a></h1>
            <a href="/users">Users</a>

            <div class="user-details">${user.name}</div>
            </body>
        </html>
    `;
  return html;
}

module.exports = showUserInfo;
