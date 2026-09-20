import { Auth } from "../models/auth.model.js";
import { validateSignup, validateLogin } from "../validators/auth.validator.js";
import bcrypt from "bcrypt";

export async function handleLogin(req, res) {
  try {
    const { name, email, password, address, phone } = req.body;

    //User validation
    const validateError = validateLogin({
      name,
      password,
      email,
      phone,
      address,
    });

    if (validateError) {
      return res.status(400).json({
        status: "failed",
        success: false,
        message: "Validation error!",
      });
    }
  } catch (errror) {
    console.log("Login error", error);
  }
  const auth = await Auth.findOne(req.body);
}

export async function handleSignup(req, res) {
  const auth = await Auth.create({
    name,
    email,
    password,
    confirmPassword,
    phone,
    address,
  });
  return res.status(200).json({
    status: "success",
    message: "Account successfully created",
    auth,
  });
}

export async function deleteAccount(req, res) {
  const { id } = req.params;
  const account = await Auth.findByIdAndDelete(id);
  return res.status(200).json({
    status: "success",
    message: "Your account has been deleted",
    account,
  });
}

export async function fetchAccounts(req, res) {
  const account = await Auth.find();
  return res.status(200).json({
    status: "success",
    message: "Account fetched successfully",
    account,
  });
}
