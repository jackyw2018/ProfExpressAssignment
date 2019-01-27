const users = require('../usersData');

let html = `
  <html>
    <head>
      <link rel="stylesheet" href="/style.css" />
    </head>

    <body>
      <h1 class="title"><a href="/">Home</a></h1>
      <a href="/users">Users</a>

      <ul>
        ${users
          .map(
            user => `<li><a href="/users/${user.id}"> ${user.name} </a></li>`
          )
          .join('')}
      </ul>
    </body>
  </html>
`;

module.exports = html;
