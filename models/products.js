import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sales: {
        type: String,
        default: "of",
    },
    Ratings:{
        type: Number,
        default: 0
    },
    product_image: {
        type: String,
        required: true,
    },
});

export const  Products = mongoose.model('Product', ProductSchema);
