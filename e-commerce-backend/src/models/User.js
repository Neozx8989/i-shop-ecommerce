const { default: mongoose } = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Enter the First Name"],
  },
  lastname: {
    type: String,
    require: [true, "Enter the Last name"],
  },

  email: {
    type: String,
    require: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    unique: false,
  },

  phone: {
    type: Number,
    minimum: 0,
  },

  address: {
    type: String,
    require: [true, "Enter the address"],
  },

  userrole: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRole",
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
