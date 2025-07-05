const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 18,
      trim: true,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["Male", "Female", "Others"].includes(value)) {
          throw new Error("Gender data is not valid.");
        }
      },
      trim: true,
    },
    photoUrl: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vhv.rs%2Fviewpic%2FhTomJiJ_transparent-background-user-icon-hd-png-download%2F&psig=AOvVaw1wey_FabIY4wXjptFIelmu&ust=1751800980320000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIihzajNpY4DFQAAAAAdAAAAABAE",
    },
    about: {
      type: String,
      default: "This is default about user.",
      trim: true,
      minLength: 15,
      maxLength: 100,
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
