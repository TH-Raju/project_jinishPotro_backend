let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bcrypt = require("bcrypt");

let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
    },
    photo: {
      type: String,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["buyer","seller", "admin", "super_admin"],
      default: "buyer",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

let User = mongoose.model("user", userSchema);
module.exports = User;
