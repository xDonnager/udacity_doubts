const express = require('express');
const cors = require('cors');

const app = new express();

app.use(express.json());
app.use(cors());

const data = [];

app.get('/', (req, res) => {
    res.send('Hello!')
})


app.post( '/addMovie', (req, res) => {
    console.log(req.body);
    data.push(req.body)
    res.send('added movie')
})


app.listen( 3000, () => {
    console.log('App running in port 3000')
})