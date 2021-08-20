const bcrypt = require("bcryptjs");

const users = [];

module.exports = {
  login: (req, res) => {
    //logging in
    console.log("Logging In User");
    // console.log(req.body);

    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(5);
    const pinHash = bcrypt.hashSync(password, salt);

    for (let i = 0; i < users.length; i++) {
      const existing = bcrypt.compareSync(password, users[i].pinHash);

      if (users[i].username === username && existing) {
        let hidePassword = { ...users[i] };
        delete hidePassword.pinHash;

        res.status(200).send(hidePassword);
        console.log("username andpassword is correct");
        return;
      } else {
        res.status(400).send("User not found.");
      }
    }
  },
  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body;
    //register new user

    const salt = bcrypt.genSaltSync(5);
    const pinHash = bcrypt.hashSync(password, salt);

    let newRegister = {
      username,
      email,
      firstName,
      lastName,
      pinHash,
    };

    users.push(newRegister);
    console.log("Registering User", users);

    let hidePassword = { ...newRegister };
    delete hidePassword.pinHash;

    // console.log("New user created");
    res.status(200).send(hidePassword);
  },
};
