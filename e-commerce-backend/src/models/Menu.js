const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    required: true,
    default: () => nanoid(10),
    index: { unique: true },
  },
  position: Number,
  children: [
    {
      title: String,
      position: Number,
    },
  ],
});

const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;
