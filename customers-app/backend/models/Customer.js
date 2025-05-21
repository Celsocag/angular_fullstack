const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        name: {
            type: string,
            required: true
        },
        email: {
            type: string,
            required: true
        },
        phone: {
            type: string,
            required: true
        },
    }
);

const Customer = mongoose.model('customers', CustomerSchema)

model.exports = Customer