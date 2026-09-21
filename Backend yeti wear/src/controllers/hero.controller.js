// import { Hero } from "../models/hero.model.js";

// // Get all hero slides
// export const getHeroes = async (req, res) => {
//   try {
//     const heroes = await Hero.find().sort({ createdAt: 1 });

//     res.status(200).json(heroes);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to get hero slides",
//       error: error.message,
//     });
//   }
// };

// // Create hero slide
// export const createHero = async (req, res) => {
//   try {
//     const hero = await Hero.create(req.body);

//     res.status(201).json(hero);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to create hero slide",
//       error: error.message,
//     });
//   }
// };

// // Update hero slide
// export const updateHero = async (req, res) => {
//   try {
//     const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!hero) {
//       return res.status(404).json({
//         message: "Hero slide not found",
//       });
//     }

//     res.status(200).json(hero);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to update hero slide",
//       error: error.message,
//     });
//   }
// };

// // Delete hero slide
// export const deleteHero = async (req, res) => {
//   try {
//     const hero = await Hero.findByIdAndDelete(req.params.id);

//     if (!hero) {
//       return res.status(404).json({
//         message: "Hero slide not found",
//       });
//     }

//     res.status(200).json({
//       message: "Hero slide deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to delete hero slide",
//       error: error.message,
//     });
//   }
// };
