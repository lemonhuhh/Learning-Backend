export async function handleLogin(req, res) {
  return res.status(200).json({ message: "Login successful" });
}

export async function handleSignup(req, res) {
  return res.status(200).json({ message: "Account created" });
}
