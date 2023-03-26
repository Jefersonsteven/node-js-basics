const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, (err, hash) => {
  const passwordHash = hash;
  console.log(passwordHash);

  bcrypt.compare(password, passwordHash, (err, res) => {
    console.log(res);
  });
})