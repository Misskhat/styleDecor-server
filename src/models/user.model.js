const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    photo: String,
    role: {
      type: String,
      enum: ['user', 'admin', 'decorator'],
      default: 'user',
    },
  },
  { timestamps: true },
)

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
