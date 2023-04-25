const PetController = require('../controllers/pet.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api/Pet', PetController.getAllPets);
    app.post('/api/Pet', PetController.createPet);
    app.get('/api/Pet/:id', PetController.getPet);
    app.put('/api/Pet/:id', PetController.updatePet);
    app.delete('/api/Pet/:id', PetController.deletePet); //note: "id" here MUST match params in controller






}

