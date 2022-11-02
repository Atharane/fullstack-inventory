const express = require("express");
const mysql = require("mysql");
// const joi = require("joi")
const app = express();

// Database schema
// inventory (`item_id`, `item_name`, `remaining`, `cost_price`, `selling_price`) PK: item_id
// sales (`sale_id`, `item_id`, `quantity`) PK: (sale_id, item_id) 
// sales_details (`sale_id`, `customer_name`, `sale_date`, `total_price`) PK: sale_id FK: sale_id
// restock (`restock_id`, `item_id`, `quantity`, `restock_date`) PK: restock_id FK: item_id

app.use(express.json());

// create a connection variable with the required details
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inventory-management", // use the specified database
});


// Request of type localhost:300/api/inventory
app.get("/api/inventory", (req, res) => {
  // get data from INVETORY table

  // EXAMPLE;
  /*
  [
  {uid: '1', name: 'keychron k-1 keyboard', remaining: 12, description: 'keyboard', cost_price: 800, selling_price: 1000},
  {uid: '2', name: 'logitech G-402 mouse', remaining: 125, description: 'gaming mouse', cost_price: 400, selling_price: 460},
  {uid: '3', name: 'Nvidia T600', remaining: 125, description: 'graphic card', cost_price: 18000, selling_price: 22000},
  ....... 
  ]
  */
  const data = [
    {
      item_id: "1",
      item_name: "Apple iPhone 14 Pro Max",
      price: "$1,299.00",
      quantity: "8",
    },
    {
      item_id: "2",
      item_name: "Apple iPhone 11",
      price: "$699.00",
      quantity: "5",
    },
    {
      item_id: "3",
      item_name: "Apple iPhone 11 Pro",
      price: "$999.00",
      quantity: "3",
    },
  ];

  res.send(data);
});

// Request of type localhost:300/api/sales
app.get("/api/sales", (req, res) => {
  // get data from sales X sales_details TABLE table
  // EXAMPLE;
  /*
  [
  {uid: '891', customer_name: 'Jim', remaining: 12, date: datetime, 
  purchases: [
      {uid: '1', name: 'keychron k-1 keyboard', price: 1000, quantity: 8},
      {uid: '2', name: 'logitech G-402 mouse', price: 460, quantity: 2},
      .....
    ] 
  },

  {uid: '892', customer_name: 'Dwight', remaining: 125, date: datetime, purchases: [...]}
  ]
  */
});


// Request of type localhost:300/api/sales_today
app.get("/api/sales_today", (req, res) => {
  // return total sales of the day
});


app.get("/api/additem/:itemname", (req, res) => {

  let itemname = req.params.itemname;

  // 4oo bad request

  // validation of request body
  /*
    if (!req.body.name) {
        res.status(400).send("Name field is mandatory");
        return;
    }
    */

  // joi validation of request body


  // if item already exists, update the quantity
  // else add new item to inventory

  // INSERT INTO `inventory` (`item_id`, `item_name`, `quantity`, `price`) VALUES ('1', 'sony xb700', '12', '6800');

  
con.connect(function (err) {
  if (err) throw err; // if connection is successful

  con.query(
    `INSERT INTO inventory (item_name, quantity, price) VALUES ('${itemname}', '16', '16900');`,
    function (err, result, fields) {
      // if any error while executing above query, throw error
      if (err) throw err; // if there is no error, you have the result
      console.log(result);
      console.log("Number of rows affected : " + result.affectedRows);
      console.log(
        "Number of records affected with warning : " + result.warningCount
      );
      console.log("Message from MySQL Server : " + result.message);
    }
  );
});

  // return updated value
  res.send("Item added successfully");
});

const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
