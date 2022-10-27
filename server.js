const express = require("express");
const joi = require("joi")
const app = express();

app.use(express.json());


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
});

// Request of type localhost:300/api/bills
app.get("/api/bills", (req, res) => {
  // get data from BILLS X BILL_DETAILS TABLE table

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


app.post("/api/additem/", (req, res) => {
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

  const updated_item = null

  // return updated value
  res.send(updated_item);
});

const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
