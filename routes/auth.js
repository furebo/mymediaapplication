const router = require("express").Router();

//bring the user model here
const User = require("../models/users");

//REGISTER
router.get("/register", (req, res) => {
  const user = new User({
    username: "Furebo",
    email: "fode@gmail.com",
    password: "fode123",
  });

  user.save().then(res.send("Okay very nice"));
});

//export router for it to be used in index.js file
module.exports = router;
