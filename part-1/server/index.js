const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const ctrl = require("./controllers/auth");

app.post("/api/login", ctrl.login);
app.post("/api/register", ctrl.register);

app.listen(4004, () => console.log(`running on 4004`));
