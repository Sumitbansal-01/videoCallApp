const {Schema, model} = require("mongoose")
const meetingSchemas = new Schema ({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    scheduleTime: {
        type: Date,
        required: true
    },
    requestedUsers: [
        {
            user: {
                type: String,
                required: true
            }
        }
    ]

})

const Meeting= model('Meetings', meetingSchemas)
module.exports=Meeting