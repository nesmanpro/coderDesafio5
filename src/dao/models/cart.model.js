const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
})

// Middleware populate
cartSchema.pre('findOne', function (next) {
    this.populate('products.product', '_id title price');
    next();
});

const cartModel = mongoose.model("carts", cartSchema);

module.exports = cartModel; 