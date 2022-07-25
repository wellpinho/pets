const Pet = require("../models/Pet");

class PetsController {
  async create(req, res) {
    const { name, age, breed, weight, family, color, available, images } =
      req.body;

    await Pet.create({
      name,
      age,
      weight,
      color,
      breed,
      family,
      available,
      images,
    });

    return res.status(201).json("Pet created!");
  }

  // async show(req, res) {
  //   const { id } = req.params;
  //   const user = await User.findById(id);

  //   if (!user) {
  //     return res.status(400).json({ error: "User not found!" });
  //   }

  //   return res.status(200).json({
  //     name: user.name,
  //     email: user.email,
  //     phone: user.phone,
  //     address: user.address,
  //   });
  // }

  // async update(req, res) {
  //   const { id } = req.params;
  //   const token = getToken(req);
  //   const user = await getUserByToken(token);

  //   const { phone, address, password, passwordConfirmation } = req.body;

  //   if (req.file) {
  //     user.image = req.file.filename;
  //   }

  //   if (!user) {
  //     return res.status(400).json({ error: "User not found!" });
  //   }

  //   if (password !== passwordConfirmation) {
  //     return res.status(422).json({ message: "passwords do not match" });
  //   }

  //   if (!password && password === passwordConfirmation) {
  //     const hashedPassword = await bcrypt.hash(password, 12);

  //     user.password = hashedPassword;
  //   }

  //   try {
  //     await User.findOneAndUpdate(
  //       { _id: user.id },
  //       { $set: user },
  //       { new: true }
  //     );
  //     return res.status(201).json({ message: "Updated user" });
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
}

module.exports = { PetsController };
