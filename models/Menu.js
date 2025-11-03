import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    taste: {
        type: String,
        enum: ['sweet', 'sour',  'spicy', ],
        default: 'spicy',
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number,
        default: 0,
        min: 0,
    },
}, { timestamps: true });

// Prevent model overwrite during hot-reload in some environments
const Menu = mongoose.models.Menu || mongoose.model('Menu', menuItemSchema);

export default Menu;