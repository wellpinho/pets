const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  // creat a token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    "nossosecret"
  );
  // return token
  return res
    .status(200)
    .json({ message: "Authenticated!", token, userId: user._id });
};

module.exports = { createUserToken };
