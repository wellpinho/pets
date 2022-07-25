const jwt = require("jsonwebtoken");
const { getToken } = require("./getToken");

const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Access denied!" });
  }

  const token = getToken(req);

  if (!token) {
    return res.status(401).json({ error: "Access denied!" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { checkToken };
