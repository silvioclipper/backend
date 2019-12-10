const express = require('express');
const routes = require('./routes');
var port = process.env.PORT || 3333;
const app = express();
app.use(express.json());
app.use(routes);
app.listen(port, ()=>{
    console.log('Servidor no ar ' + port)
})