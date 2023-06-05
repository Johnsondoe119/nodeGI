//after installing express we need to call it
//im storing the data in my json file to my variable called empdata
const express = require("express");
const empdata = require("../hard.json");

//next i have to create an express application
//look into this part
const app = express();

//next i have to create the route to get to All employee data
app.get("/employees", (req, res) => {
  res.json(empdata);
});

//next this is a route to get employee by ID
app.get("/employees/<employeeID>", (req, res) => {
  const employeeID = parseInt(req.params.employeeID);

  //finding the employee with a given id, if we find the employee we will send its data, and if not we return an error
  const emps = empdata.find((emp) => emp.employeeID === employeeID);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
