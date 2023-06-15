const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historyItemSchema = new Schema(
    {
        termId: { type: Schema.Types.ObjectId, ref: 'Term', required: true },
        timestamp: { type: Date, required: true },
    })

const historySchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        history: { type: [historyItemSchema], default: [] },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('History', historySchema, 'histories');