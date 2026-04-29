const verifyAdmin = (req, res, next) => {
  if (req.userInfo.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden - admins only' })
  }
  next()
}

module.exports = { verifyAdmin }
