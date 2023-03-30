const { default: mongoose } = require("mongoose");

// Admin hereglegch bol bvh erhtei hereglegch baina.
// Customer hereglegch bol Admin Panel-ruu newterch chadahgui hereglegch baina
// User hereglegch n zarim neg Admin Panel deer ustgah, uurchluh eswel vvsgeh erhgui hereglegch baina.

const userRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the Role Name"],
    unique: true,
  },
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

module.exports = UserRole;
