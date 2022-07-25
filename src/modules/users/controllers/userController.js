const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUserToken } = require("../../../helpers/create-user-token");
const { getToken } = require("../../../helpers/getToken");

class UserController {
  async create(req, res) {
    const { name, email, password, image, phone, address } = req.body;
    const userExists = await User.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 12);

    if (userExists) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      image,
      phone,
    });

    await createUserToken(user, req, res);

    return res.status(201).json("User created!");
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }

    await createUserToken(user, req, res);

    // check if password match with db password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({ error: "User not found!" });
    }

    return res.status(200).json({ message: "Logged in", user: email });
  }

  async checkUser(req, res) {
    let currentUser;

    if (req.headers.authorization) {
      const token = getToken(req);
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      currentUser = await User.findById(decoded.id);
      currentUser.password = null;
    } else {
      currentUser = null;
    }

    return res.status(200).json(currentUser);
  }
}

module.exports = { UserController };
