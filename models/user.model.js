const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        provider_id: { type: String, required: true },
        email: { type: String, required: true },
        name: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema, 'users');