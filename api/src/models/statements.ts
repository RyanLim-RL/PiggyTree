import mongoose from "mongoose";
import { start } from "repl";

const StatementSchema: mongoose.Schema = new mongoose.Schema({
    user: {
        tyle: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "approved", "proccessed", "error"],
        default: "pending",
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
    fileName: {
        type: String,
        required: true,
    },
    s3key: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    numberOfTransactions: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model("Statement", StatementSchema);
