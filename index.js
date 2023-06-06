/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
// import express from 'express'; // <-- Module Style import
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import autoIncrement from 'mongoose-auto-increment';


// // Importing user route

// // const router = require('router')

// // const bodyParser = require('body-parser')

// import mongoose from "mongoose";

// const UserSchema = {
//     name : String,
//     id: Number,
//     salary: Number

// }






// mongoose.connect("mongodb+srv://hassan2131:Hassan123@cluster0.jvppt6m.mongodb.net/?retryWrites=true&w=majority")
// const User = mongoose.model("User", UserSchema);

// const app = express()
// const port = 3001
// app.use(cors({
//     origin: '*'
// }));
// app.use(bodyParser.json())
// // Adding a Router
// //app.use('/users', router);

// app.get('/users', async(req, res) => {

//    const user=  await User.find().exec()
//     res.send(user)
// })





// app.post('/new', (req, res) => {
//     console.log(req.body)
//     const user = new User({
//         name: req.body.user.name,
//         id: req.body.user.id,
//         salary: req.body.user.salary,

//     });
//     user.save(function (err) {
//         if (err) {
//             res.status(404).send("error"); 
//         } else {
//             res.status(200).send("Success"); 
//         }
//     });
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// console.log("Hello World!")
import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';

import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();



app.use(bodyParser.json({extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'https://webprojectsalary.onrender.com'}));

app.use('/', Routes);



const PORT = '8080';

Connection();
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

