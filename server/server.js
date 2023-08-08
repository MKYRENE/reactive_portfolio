//Importing oath and express
const express = require('express');
const path = require('path');

//CONNECTION
const app = express();
const PORT = process.env.PORT || 3333;

//MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client/build')));

//GET REQUEST
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});
app.listen(PORT, () => console.log('Server started on port %s', PORT));