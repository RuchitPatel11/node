const express = require("express");
const app1 = express();
const router = express.Router();
app1.disable("x-powered-by");

app1.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

router.get("/hello", (req, res) => {
  res.send("hello, user!");
});

app1.use("/router", router);

const defMiddleware = (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
};

app1.get("/user/:id", defMiddleware, (req, res) => {
  res.send(`UserID: ${req.params.id}`);
});

app1.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
