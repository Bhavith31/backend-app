import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;