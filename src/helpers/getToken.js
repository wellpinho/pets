const getToken = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  return token;
};

module.exports = { getToken };
