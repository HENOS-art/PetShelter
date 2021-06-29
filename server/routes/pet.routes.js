const PetController = require("../controllers/pet.controller");

module.exports = app => {
  app.get("/api/pets/", PetController.getAll);
  app.get("/api/pets/:id", PetController.getOne);
  app.put("/api/pets/:id", PetController.update);
  app.post("/api/pets/new", PetController.create);
  app.delete("/api/pets/:id", PetController.delete);
};