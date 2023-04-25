const Pet = require('../models/pet.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.getAllPets = (request, response) => {
    Pet.find({})
        .then(Pets => {
            console.log(Pets); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(Pets);
        })
        .catch(err => {
            console.log(err)

        })
}


          /* The method below is new */
module.exports.createPet = (request, response) => {
    // Mongoose's "create" method is run using our Pets model to add a new Pets to our db's Pets collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Pet.create(request.body) //This will use whatever the body of the client's request sends over
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err));
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err));
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,
    runValidators: true}, )
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err));
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



