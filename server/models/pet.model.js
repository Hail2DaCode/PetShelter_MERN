const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { type: String, unique:true,
        required: [true, "Name is required"], 
        minLength: [3, "Name must be at least 3 characters"] 
    },
    type: { type: String, 
        required: [true, "Type is required"], 
        minLength: [3, "Type must be at least 3 characters"] 
    },
    description: { type: String, 
        required: [true, "Description is required"], 
        minLength: [3, "Description must be at least 3 characters"] 
    },
    firstSkill: {type: String,
    },
    secondSkill: {type: String,
    },
    thirdSkill: {type: String,
    }

}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);

