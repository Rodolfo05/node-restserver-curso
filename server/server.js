//este es el primer archivo que ejecutara
require('./config/config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json('GET USUARIO')
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        //envio codigo de respuesta
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });

    } else {
        //body: body es redundante
        res.json({
            persona: body
        })
    }


})

app.put('/usuario/:id', function(req, res) {
    //id que viene en el url
    let id = req.params.id;

    res.json({
        id
    });
})

app.delete('/usuario', function(req, res) {
    res.json('DELETE USUARIO')
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", 3000);
})