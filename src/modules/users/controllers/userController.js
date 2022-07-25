const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createUserToken } = require("../../../helpers/create-user-token");
const { getUserByToken } = require("../../../helpers/getUserByToken");
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

  async show(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }

    return res.status(200).json({
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const token = getToken(req);
    const user = await getUserByToken(token);

    const { phone, address, password, passwordConfirmation } = req.body;
    let image = "";

    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }

    if (password !== passwordConfirmation) {
      return res.status(422).json({ message: "passwords do not match" });
    }

    if (!password && password === passwordConfirmation) {
      const hashedPassword = await bcrypt.hash(password, 12);

      user.password = hashedPassword;
    }

    try {
      await User.findOneAndUpdate(
        { _id: user.id },
        { $set: user },
        { new: true }
      );
      return res.status(201).json({ message: "Updated user" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = { UserController };
