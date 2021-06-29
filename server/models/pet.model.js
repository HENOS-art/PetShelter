const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name: { 
		type: String,
		required: [ true, "Name is required for pets" ],
		minlength: [ 3, "Name must be atleast 3 characters long" ],
	},
    type: { 
		type: String,
		required: [ true, "type is required for pets" ],
		minlength: [ 3, "type must be atleast 3 characters long" ],
	},
	description: { 
		type: String,
		required: [ true, "Description is required for pets" ],
		minlength: [ 3, "Description must be atleast 3 characters long" ],
	},
    skill1: {
        type:String,
		// required:[true,skills ],
		minlength: [ 3, "skills must be atleast 3 characters long" ],
        
	},
    skill2: {
        type:String ,
		// required:[true,skills ],
		minlength: [ 3, "skills must be atleast 3 characters long" ],
        
	},
    skill3: {
        type:String ,
		// required:[true,skills ],
		minlength: [ 3, "skills must be atleast 3 characters long" ],
        
	},

    
    
		
    
    

   
} ,
           { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;