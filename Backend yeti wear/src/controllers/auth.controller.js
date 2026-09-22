import { Auth } from "../models/auth.model.js";
import { validateLogin, validateSignup } from "../validators/auth.validator.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;

    // Validate login data
    const validationError = validateLogin({
      email,
      password,
    });

    if (validationError) {
      return res.status(400).json({
        status: "Failed",
        success: false,
        message: validationError,
      });
    }

    // Find user
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        status: "failed",
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate token only after password is correct
    const token = generateToken(user);

    // Store token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Login successful
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Login failed!!",
    });
  }
}

export async function handleSignup(req, res) {
  try {
    const { name, email, phone, address, password } = req.body;

    // Validate user data
    const validationError = validateSignup({
      name,
      email,
      phone,
      address,
      password,
    });

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    // Check if user already exists
    const existingUser = await Auth.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user account
    const user = await Auth.create({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      role: "USER",
    });

    return res.status(201).json({
      success: true,
      message: "User successfully registered",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function deleteAccount(req, res) {
  try {
    const { id } = req.params;
    const account = await Auth.findByIdAndDelete(id);

    if (!account) {
      return res.status(404).json({
        success: false,
        message: "Account not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Your account has been deleted",
      account,
    });
  } catch (error) {
    console.log("Delete Account Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete account",
    });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await Auth.find().select("-password");

    return res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "error",
      message: "Failed to fetch users",
    });
  }
}

//Create admin account
// Create admin account
export async function createAdmin(req, res) {
  try {
    const { name, email, phone, address, password } = req.body;

    // Check required fields
    if (!name || !email || !phone || !address || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if email already exists
    const existingUser = await Auth.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const admin = await Auth.create({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      role: "ADMIN",
    });

    return res.status(201).json({
      success: true,
      message: "Admin successfully created",
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        address: admin.address,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log("Create Admin Error:", error);

    return res.status(500).json({
      success: false,
      message: "Error creating admin account",
    });
  }
}
