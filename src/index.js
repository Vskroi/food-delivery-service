/* const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const users = [
    {
        firstName: 'Gardi',
        secondName: 'magnai'
    }
];


app.get('/users', (req , res) => {
    res.send(users)
})
app.post('/users', (req , res) => {
    const {firstName , secondName } = req.body
    users.push({
        firstName,
        secondName
    })
    res.send(users)
})

app.put('/users', (req, res) => {
users[0].firstName = "Kevin"
res.send(users)
});

app.delete('/users', );
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) */
import express from 'express'
import fs from 'fs'
    const rawUserdata = fs.readFileSync('src/db/users.json')
    const users = JSON.parse(rawUserdata)

import {  loginRouter, userRouter } from './routers/user-router.js';
 
    const app = express();
    const port = 3000;
    
    app.get(users)
    app.use(express.json());
    
   

    app.use("/users" , userRouter)
app.use("/users/login", loginRouter)

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })