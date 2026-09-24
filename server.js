// request logger using express middleware

const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/products',(req,res)=>{
    res.send('products logged')
})

app.get('/orders',(req,res)=>{
    res.send('orders logged')
})

app.get('/customers',(req,res)=>{
    res.send('customers logged')
})


app.get('/logs',(req,res) =>{
    const logFilePath = path.join(__dirname, 'access.log');
    fs.readFile(logFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading log file:', err);
            res.status(500).send('Error reading log file');
            return;
        }
        res.type('text/plain').send(data);
    });
})

app.listen(3000, () => {
    console.log('server is running on port 5000');
});
