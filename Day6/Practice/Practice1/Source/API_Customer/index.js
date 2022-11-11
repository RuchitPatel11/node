const express = require("express");
const app1 = express();
app1.disable("x-powered-by");
app1.use(express.json());

const customers = [
  {
    id: 1,
    name: "Rahul",
  },
  {
    id: 2,
    name: "Pranay",
  },
  {
    id: 3,
    name: "Prince",
  },
  {
    id: 4,
    name: "Rohan",
  },
  {
    id: 5,
    name: "Jash",
  },
];

//1
app1.get("/customers", (req, res) => {
  res.status(200).json(customers);
});

//2
app1.get("/customers/:id", (req, res) => {
  const customer = customers.find((item) => item.id == parseInt(req.params.id));
  res.send(customer);
});

//3
app1.post("/customer", (req, res) => {
  const customer = {
    id: parseInt(req.body.id),
    name: req.body.name,
  };
  customers.push(customer);
  res.send(customer);
});

//4
app1.put("/customers/:id", (req, res) => {
  const customer = customers.find(
    (item) => item.id === parseInt(req.params.id)
  );
  customer.name = req.body.name;
  const index = customers.findIndex((value) => (value.id = customer.id));
  customers[index] = customer;
  res.send(customer);
});

//5
app1.delete("/customers/:id", (req, res) => {
  const customer = customers.find(
    (item) => item.id === parseInt(req.params.id)
  );

  const index = customers.findIndex((value) => (value.id = customer.id));
  customers.splice(index, 1);
  res.send(customer);
});

app1.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
