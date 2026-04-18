const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://simpleDBUser:mdzu-FMwmY3z3P@cluster0.5bt6oyo.mongodb.net/styleDecor',
    )
    console.log(`Database connected`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
