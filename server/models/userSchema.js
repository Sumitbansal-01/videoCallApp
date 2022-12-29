const {Schema, model} = require('mongoose')
const bcrypt= require('bcrypt')

const userSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    this.password=await bcrypt.hash(this.password,12)
    next()
})

const User= model('USER', userSchema)
module.exports =User