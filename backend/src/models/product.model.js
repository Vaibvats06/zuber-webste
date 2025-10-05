import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  brand: { type: String, required: true },
  colour: { type: String, required: true },
  quantity: { type: Number, required: true },
  meter: { type: Number, required: true },
  costPrice: { type: Number, required: true },
  sellingPrice: { type: Number, required: true },
  expensePrice: { type: Number, required: true },
  profit: { type: Number, required: true },
  customerId: { type: String, required: true },
}
, { timestamps: true});

const Product = mongoose.model("Product", productSchema);

export default Product;
