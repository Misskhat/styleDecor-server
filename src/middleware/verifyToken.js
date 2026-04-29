const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token
  if (!token) {
    return res.status(403).json({
      message: '403 Forbidden',
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    req.userInfo = decoded
    next()
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Internal Error Found Please check:- ' })
  }
}

module.exports = { verifyToken }
