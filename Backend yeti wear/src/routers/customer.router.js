import { Router } from "express";

export const customerRouter = Router();

customerRouter.get("/", (req, res) => {
  return res.status(200).json({
    success: "true",
    customers: [
      {
        id: 1,
        fullName: "Krul Heaven",
        email: "krul22@gmail.com",
        phone: 9838574809,
        address: "Kathmandu, Nepal",
      },
      {
        id: 2,
        fullName: "Mambik",
        email: "mambik42@gmail.com",
        phone: 976336363,
        address: "Lalitpur, Nepal",
      },
    ],
  });
});
