#!/usr/bin/env node
import express from "express"
import indexRouter from './routes/mainRoutes.js'
import cores from 'cors'

var app = express();
app.use(cores())
//this will put body data that's json format into req.body
app.use(express.json());

//this will put url parameters into req.query
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

export default app;
