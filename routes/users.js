const router = require("express").Router();

//make the requests

router.get("/", (req, resp) => {
  resp.send("He welcome to the user routes");
});

//export router for it to be used in index.js file
module.exports = router;
