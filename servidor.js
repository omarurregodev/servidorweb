const express = require("express");

const app = express();

const PORT = 8080;

let contador = 0;



const server = app.listen(PORT, ()=>{
    console.log("servidor iniciado");
})

app.get("/", (req, res) => {
    contador++;
    res.send(`<h1 style='color: blue'>Bienvenidos al servidor Express</h1>`)
})

app.get("/visitas", (req, res) => {
    res.send(`<h2 style='color:red'>Este es el número de visitas ${contador}</h2>`)
})

// app.get("/fechayhora", (req, res) => {
//     contador++;
//     let fecha = new Date();
//     res.send(`<h2 style='color:red'>La fecha es: ${fecha.toLocaleDateString()} y la hora es: ${fecha.toLocaleTimeString}</h2>`)
// })

