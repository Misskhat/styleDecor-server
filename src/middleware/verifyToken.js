const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // check cookie first
  let token = req.cookies?.token;

  // if no cookie, check Authorization header
  if (!token) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.userInfo = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden - invalid token" });
  }
};

module.exports = { verifyToken };
