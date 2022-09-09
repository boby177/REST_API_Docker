const express = require("express");

const sequelize = require("./util/database");
const User = require("./models/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  next();
});

app.use("/dev", require("./routes/dev"));
app.use("/users", require("./routes/users"));

async () => {
  try {
    await sequelize.sync({ force: false });

    console.log("Server is running on port 3001");
    app.listen(process.env.EXTERNAL_PORT || 3001);
  } catch (error) {
    console.log(error);
  }
};
