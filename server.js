#!/usr/bin/env node
// import express from "express"
import mongoose from "mongoose"
// import mServiceData from './model/indexData.js'
// import cores from 'cors'
import app1 from './app.js'
const dburi = "mongodb+srv://admin:admin@myportfollio.a6rna.mongodb.net/portfollio-db?retryWrites=true&w=majority"


const port = process.env.PORT || 8001

mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((results) => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("error : " + error);
  });

// //api endpoint
// app1.get("/", (req, res) => res.status(200).send("hello bro"))

// app1.post("/add/service", (req, res) => {
//   const serviceData = req.body

//   mServiceData.create(serviceData, (err, data) => {
//     if (err) {
//       res.status(500).send("Error 500")
//     } else {
//       res.status(201).send(data)
//     }
//   })

// })

// app1.get("/get/service", (req, res) => {
//   mServiceData.find((err, data) => {
//     if (err) {
//       res.status(500).send("Error 500")
//     } else {
//       res.status(200).send(data)
//     }
//   })

// })


app1.listen(port, () => console.log(`listening on port:${port}`))


