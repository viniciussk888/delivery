import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { createCategory } from "./app/useCases/categories/createCategory";
import { deleteCategory } from "./app/useCases/categories/deleteCategory";
import { ListCategories } from "./app/useCases/categories/listCategories";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { createOrder } from "./app/useCases/orders/createOrder";
import { deleteOrder } from "./app/useCases/orders/deleteOrder";
import { ListOrders } from "./app/useCases/orders/listOrders";
import { createProduct } from "./app/useCases/products/createProduct";
import { ListProducts } from "./app/useCases/products/listProducts";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, "..", "uploads"))
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  }),
});

//List categories
router.get("/categories", ListCategories);
//Create category
router.post("/categories", createCategory);
//Delete category
router.delete("/categories/:categoryId", deleteCategory);
//List products
router.get("/products", ListProducts);
//Create product
router.post("/products", upload.single("image"), createProduct);
//Get product by category
router.get("/categories/:categoryId/products", listProductsByCategory);
//List orders
router.get("/orders", ListOrders);
//Create order
router.post("/orders", createOrder);
//Change order status
router.patch("/orders/:orderId", changeOrderStatus);
//Delete/cancel order
router.delete("/orders/:orderId", deleteOrder);
