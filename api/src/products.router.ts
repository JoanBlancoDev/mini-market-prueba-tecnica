import { Router, Request, Response } from "express";
import { ProductQueryParams } from "./types";
import ProductModel from "./models/ProductModel";

const router = Router();

// Productos
router.get("/", async (req, res: Response) => {
  const { search, sort, order, page, limit, available }: ProductQueryParams =
    req.query;

  try {
    // Armar objeto para buscar por name y disponibilidad
    let query: any = {};
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
    if (available) {
      query.isAvailable = available === "true";
    }
    // Paginacion
    const limitNumber = parseInt(limit as string) || 10;
    const pageNumber = parseInt(page as string) || 1;

    const totalProducts = await ProductModel.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limitNumber);
    if (totalProducts === 0) {
      return res.json({
        ok: true,
        data: [],
        meta: {
          total: 0,
          pages: 0,
          page: 0,
          limit: limitNumber,
        },
      });
    }
    if (pageNumber > totalPages) {
      return res.status(404).json({
        ok: false,
        message: "La página solicitada no existe.",
      });
    }

    const skipProducts = (pageNumber - 1) * limitNumber;
    // Ordenar ascendente o descendente ya sea por name o price
    let sortOptions: any = {};
    if (sort) {
      sortOptions[sort] = order === "desc" ? -1 : 1;
    }
    // Traer productos
    const products = await ProductModel.find(query)
      .sort(sortOptions)
      .skip(skipProducts)
      .limit(limitNumber);

    return res.status(200).json({
      ok: true,
      data: products,
      meta: {
        total: totalProducts,
        pages: totalPages,
        page: pageNumber,
        limit: limitNumber,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
});

// Producto por ID
router.get("/:id", async (req, res: Response) => {
  const { id } = req.params;
  try {
    // Buscar producto por id
    const findProductById = await ProductModel.findById(id);

    if (!findProductById) {
      return res.status(404).json({
        ok: false,
        message: "Producto inexistente.",
      });
    }

    return res.status(200).json({
      ok: true,
      product: findProductById,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
});
export default router;
