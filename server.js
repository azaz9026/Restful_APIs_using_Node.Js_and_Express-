const epxress = require('express');

const app = epxress();

app.use(epxress.json());

app.use(middleWare);

function middleWare (req , res , next ){
    console.log("Inside the middle Ware I Created")
    next();
}



/**
 *  Stich the routes to the server.js
 * 
 */

require('./routes/idea.routes')(app);

//  starting server 

app.listen( 8080 , () => {
    console.log('server started');
})