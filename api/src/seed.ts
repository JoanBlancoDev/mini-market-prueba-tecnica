// src/seed.ts
import mongoose from "mongoose";
import ProductModel from "./models/ProductModel";
import productsData from "./data/products.json";
import connectDB from "./database/db";

const seedDB = async () => {
  try {
    await connectDB();

    console.log("Limpiando...");
    await ProductModel.deleteMany({});

    console.log("Insertando productos...");
    await ProductModel.insertMany(productsData);

    console.log("Productos seeded! 🌱");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
