import { Router } from "express";
import { getAllProducts, getProductById, getCheapestProducts } from "../controllers/products.controller";

const router = Router();
// 3 mas baratos
router.get('/cheapest', getCheapestProducts);

// Productos
router.get("/", getAllProducts);

// Producto por ID
router.get("/:id", getProductById);
export default router;
