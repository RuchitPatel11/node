const express = require("express");
const fs = require("fs");
const app1 = express();
app1.disable("x-powered-by");
app1.use(express.json());

const students = JSON.parse(fs.readFileSync("./students.json"));

//1
app1.get("/students", (req, res) => {
  res.send(students);
});

//2
app1.get("/students/:ID", (req, res) => {
  const student = students.find((item) => item.ID == parseInt(req.params.ID));
  res.send(student);
});

//3
app1.get("/students/:ID/fees", (req, res) => {
    const student = students.find((item) => item.ID == parseInt(req.params.ID));
  
  res.contentType('application/json').send(JSON.stringify(
    {
        ID: student.ID,
        Name:student.Name,
        Fees:student.Fees
    }
  ));
});

//4
app1.get("/students/:ID/result", (req, res) => {
    const student = students.find((item) => item.ID== parseInt(req.params.ID));
  
  res.contentType('application/json').send(JSON.stringify(
    {
        ID: student.ID,
        Name:student.Name,
        Result:student.Result
    }
  ));
});



app1.listen(8000, () => {
  console.log("Server is running on port 8000...");
});
