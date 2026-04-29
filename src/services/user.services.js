const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const userLogin = async (req, res) => {
  try {
    const { name, email } = req.body
    let dbUser = await userModel.findOne({
      email: email,
    })

    if (!dbUser) {
      dbUser = await userModel.create({ name, email, role: 'user' })
    }

    const token = jwt.sign({ email: email, role: dbUser.role }, process.env.JWT_TOKEN, {
      expiresIn: '7d',
    })
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    res.status(200).json({
      message: 'User successfully login',
      user: { name, email, role: dbUser.role, token },
    })
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error })
  }
}

const allUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find()
    return res.status(200).json({
      message: 'Successfully fetch all users',
      allUsers,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong', err })
  }
}

const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params
    const update = 'decorator'
    const updateUser = await userModel.findByIdAndUpdate({ _id: id }, { role: update })
    return res.status(200).json({
      message: 'User role update successfully',
      user: updateUser,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong', err })
  }
}

module.exports = { userLogin, allUsers, updateUserRole }
