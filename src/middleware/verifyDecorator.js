const verifyDecorator = (req, res, next) => {
  if (req.userInfo.role !== 'decorator') {
    return res.status(403).json({ message: 'Forbidden - decorators only' })
  }
  next()
}

module.exports = { verifyDecorator }
