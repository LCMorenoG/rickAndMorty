const express = require('express');
const server = express();
const PORT = 3002;
const router = require("./routes/index");
const morgan = require("morgan");
const { conn } = require('./DB_connection');

server.use(morgan("dev"));
server.use(express.json());

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
         );
         next();
      });
      
      server.use("/rickandmorty", router)
      
      
      conn.sync({force:false})
      
      server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});





/* 
const http = require("http")
const getCharById = require ("./controllers/getCharById")



http.createServer((require, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    if(require.url.includes("/rickandmorty/character")) {
        let id = require.url.split("/").at(-1).toString();
        getCharById(response, +id)
    }

}).listen(3002, "localhost") */


