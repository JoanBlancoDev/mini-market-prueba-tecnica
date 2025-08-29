import mongoose, { Schema, Document } from "mongoose";
import { ProductCategory } from "../types";

export interface IProduct extends Document {
  name: string;
  price: number;
  isAvailable: boolean;
  category: ProductCategory;
  image: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true },
    category: {
      type: String,
      required: true,
      enum: ["gloves", "headgear", "bag"],
    },
    image: { type: String, required: true },
  },
  {
    toJSON: { virtuals: true },
  }
);

ProductSchema.virtual("id").get(function () {
  return (this as any)._id?.toHexString();
});

const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);
export default ProductModel;
