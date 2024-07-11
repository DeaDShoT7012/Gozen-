const router = require("express").Router();

router.use("/api", require("./api"));

router.get("/", (req, res) => {
  res.send("Database Integration with Database!!");
});


module.exports = router;

