export const validateSignup = ({ name, email, address, password, phone }) => {
  if (!name || !email || !address || !password || !phone) {
    return "All feilds are required";
  }

  if (name.trim().length < 3) {
    return "Name must be atleast 3 characters";
  }

  if (!email.includes("@")) {
    return "Please enter a valid email";
  }

  if (phone.trim().length < 10) {
    return "Please enter a valid phone number";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
};

export const validateLogin = ({ email, password }) => {
  if (!email || !password) {
    return "Email and password are required";
  }

  if (!email.includes("@")) {
    return "Please enter a valid email";
  }

  return null;
};
