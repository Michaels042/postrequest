const { application } = require("express");
const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mealRations = [
  {
    meal: "breakfast",
    portions: 1,
  },
  {
    meal: "lunch",
    portions: 2,
  },
];

// res and req are built-in callback functions
app.get("/meals", (req, res) => {
  res.send(mealRations);
});

// a third object is being pushed into yhe array of mealRations
app.post("/meals", (req, res) => {
  console.log(req.body);
  mealRations.push(req.body);
  res.send(201);
});
