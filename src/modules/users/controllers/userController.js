const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createUserToken } = require("../../../helpers/create-user-token");

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
    const { email, passord } = req.body;

    return res.status(200).json({ message: "Logged in", user: email });
  }
}

module.exports = { UserController };
