const mongoose = require('mongose');

const useSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    office: {
        type: String,
        required: true,
    },

    birthday: {
        type: Date,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

})