import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const productCategorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: () => uuidv4(),
    index: { unique: true },
  },
  product_category_name: {
    type: String,
    require: true,
  },
  product_category_description: String,
});

const ProductCategory = mongoose.model("category", productCategorySchema);

export default ProductCategory;
