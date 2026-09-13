import { Auth } from "../models/auth.model.js";

export async function handleLogin(req, res) {
  return res.status(200).json({ message: "Login successful" });
}

export async function handleSignup(req, res) {
  const auth = await Auth.create(req.body);
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
