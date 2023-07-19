
const ideaController = require('../controllers/idea.controller');


/**
 * Define route for the call like
 * 
 * GET 127.0.0.1:8080/ideaApp/v1/ideas
 */

module.exports = (app) => {

    
    // Get Call


    app.get("/ideaApp/v1/ideas" , ideaController.fetchAllIdeas );


    // Post Call


    app.post("/ideaApp/v1/ideas" , ideaController.createIdea );



    // Put Call


    app.put("/ideaApp/v1/ideas/:id" , ideaController .upideaIdea);



    // delete Call


    app.delete("/ideaApp/v1/ideas/:id" , ideaController.deleteIdea);


}