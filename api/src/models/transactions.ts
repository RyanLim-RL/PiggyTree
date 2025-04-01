import mongoose from "mongoose";

const TransactionSchema: mongoose.Schema = new mongoose.Schema({
    statement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Statement",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    editedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Transaction", TransactionSchema);