const express = require('express');

const server = express();

server.get('/teste', (req,res) =>{
    res.send("MAIS UMA VEZ, TUDO CERTO COM A NOSSA API!")
});

server.listen(3000, () => {
    console.log("API online")

});