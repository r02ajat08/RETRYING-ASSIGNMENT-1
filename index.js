const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;



let cors = require("cors");

app.use(cors());
// app.get("/", (req,res)=>{
//   let  = req.qeury. ;
//   res.send();
// });

// q-1

// app.get("/cart-total", (req,res)=>{
//   // let newItemPrice =parseFloat(req.query.newItemPrice);
//   // let cartTotal = parseFloat(req.query.cartTotal);
//   let item1price = parseFloat(req.query.newItemPrice);
//   let item2price = parseFloat(req.query.newItemPrice);
//   let item3price = parseFloat(req.query.newItemPrice);
//   cartTotal= item1price+item2price+item3price;
//   res.send(cartTotal.toString());
// });

app.get('/cart-total', (req, res) => {
  let item1price = parseFloat(req.query.newItemPrice);
  let item2price = parseFloat(req.query.newItemPrice);
  let item3price = parseFloat(req.query.newItemPrice);
  let cartTotal = item1price + item2price + item3price;
  res.send(cartTotal.toString());
});


// q-2

app.get("/membership-discount", (req,res)=>{
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  let discount = parseFloat(10);
  let result;
  if (isMember =="true"){
    result = cartTotal-(cartTotal*discount/100)
  }else{
    result = cartTotal
  }
  res.send("₹"+result.toString());
});


// q-3

app.get("/calculate-tax",(req,res)=>{
  let cartTotal = parseFloat(req.query.cartTotal);
  let tax = parseFloat(5);
  let totalTax = (cartTotal * tax)/100;
  res.send(totalTax.toString());
});

// q-4
app.get("/estimate-delivery", (req,res)=>{
  let shippingMethod = req.query.shippingMethod ;
  let distance = parseFloat(req.query.distance) ;
  let time;
  if (shippingMethod == "express"){
    time = Math.round(distance/100);
  }else{
    time = Math.round(distance/50);
  }
  res.send(time.toString());
});

// Q-5
app.get("/shipping-cost", (req,res)=>{
  let weight = parseFloat(req.query.weight) ;
  let distance  = parseFloat(req.query.distance);
  let cost =weight * distance * 0.1;
  res.send(cost.toString());
});

// q-6

app.get("/loyalty-points", (req,res)=>{
  let purchaseAmount = parseFloat(req.query.purchaseAmount) ;
  let points = 2*purchaseAmount;
  res.send(points.toString());
});

 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
