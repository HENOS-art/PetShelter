const Pet= require('../models/pet.model'); 

module.exports={
  getAll:(req,res) =>{
    Pet.find({})
    .then((pets )=>res.json(pets))
    .catch((err)=>res.json(err))
},
  
getOne:(req,res) =>{
    Pet.findById(req.params.id)
    .then((pet )=>res.json(pet))
    .catch((err)=>res.json(err))
},
create:(req,res) =>{
    console.log(req.body);
    Pet.create(req.body)
    .then((newPet)=>res.json(newPet))
    .catch((err)=>res.json(err));
},


//  update : (req, res) => {
//     Pet.findOneAndUpdate(  req.params.id , req.body)
//     .then(updatedPet => res.json(updatedPet ))
//     .catch(err => res.json(err));
//  },
update :(req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPet => res.json({ updatedPet }))
    .catch(err => res.json({  err }));
},
delete:(req,res) =>{
    Pet.findByIdAndRemove(req.params.id)
    .then((deleted)=>res.json(deleted))
    .catch((err)=>res.json(err));
},
};