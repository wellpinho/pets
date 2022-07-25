const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  return res
    .status(200)
    .json({ message: "Authenticated!", token, userId: user._id });
};

module.exports = { createUserToken };
