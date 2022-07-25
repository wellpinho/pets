const jwt = require("jsonwebtoken");
const User = require("../modules/users/models/User");

const getUserByToken = async (token) => {
  if (!token) {
    return res.status(401).json({ error: "Access denied!" });
  }
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  const user = await User.findOne({ _id: decoded.id });

  return user;
};

module.exports = { getUserByToken };
