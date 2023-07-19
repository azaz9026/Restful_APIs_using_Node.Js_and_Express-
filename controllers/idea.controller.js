const ideas = require("../models/idea.model");


/**
 * Search all Idea
 */


        exports.fetchAllIdeas = (req , res) => {

            res.status(200).send(ideas);

        }



/**
 * Create new idea
 */

let idCount = 1 ; 

        exports.createIdea = (req , res) => {
            //read the request body
            const idea = req.body ;

            // Need it generate the next idea id
            idea.id = ++idCount ;

            //Save it in the list of existing idea
                ideas[idCount] = idea ;

            //retune the res
                res.status(201).send(idea[idCount]);

        }

/**
 * Update idea
 */


        exports.upideaIdea = (req , res) => {

        
            // I need to read the id  passed in the path

                const ideaId = req.params.id;

            // 127.0.0.1:8080/ideaApp/v1/ideas

                if(ideas[ideaId]){
                    ideas[ideaId]= req.body;
                    res.status(200).send(ideas[ideaId]);
                }
                else{
                    res.status(400).send({
                        message : 'Idea Id passed was not correct'
                    })
                }

            }


/**
 * Delete idea
 */


exports.deleteIdea = (req , res) => {

    //check if present  -yes delete , no return error message
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(202).send({
            message : "Successfully Delete"
        })
    }
    else{
        res.status(404).send({
            message : "Wrong idea id"
        })
    }
}

