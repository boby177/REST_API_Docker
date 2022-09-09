const User = require("../models/users");

exports.getAll = async (req, res, next) => {
  try {
    const All = await User.findAll();
    return res.status(200).json(All);
  } catch (err) {
    return res.status(500).json(err);
  }
};
