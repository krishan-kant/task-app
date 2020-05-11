const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User', {
    name: {
        type: String,
        required:true,
        trim: true
    },
    email: {
        type: String,
        trim:true,
        lowercase:true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password cannot be password")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error("You Must be born")
            }
        }
    }
})

module.exports = User


// const me = new User({
//     name: '    Joey  ',
//     password: 'Password',
//     email: ' MYEMAIL@GMAIL.COM  '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })