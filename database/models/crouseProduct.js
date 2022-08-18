const mongoose = require('mongoose')


const playlist = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please entre the name']
    },
    imageUrl: {
        type: String,
    },
    universityName: {
        type: String,
        required: [true, 'please entre the University Name']
    },
    facultyProfile: {
        type: String,
        required: [true, 'please entre the Faculty Profile'],
        unique: true
    },
    learningHoursAndDuration: {
        type: Number,
        required: [true, 'please entre the Learning Hours And Duration'],
    },
    price: {
        type: Number,
        required: [true, 'please enter the price']
    },
    Certificate: {
        type: String,
        required: [true, 'please enter the Certificate']
    },
    EligibilityCriteria:{
        type:String,
        require:[true,'please enter the Eligibility Criteria']
    }
})

module.exports=mongoose.model('course',playlist)

