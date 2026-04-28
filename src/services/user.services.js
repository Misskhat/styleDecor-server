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

module.exports = { userLogin }
