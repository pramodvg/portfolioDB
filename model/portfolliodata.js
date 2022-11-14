import mongoose from 'mongoose'

const portfolioSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        imglink: { type: String, required: true },
        link1: { type: String, required: true },
        link2: { type: String, required: true },
        author: { type: String, required: true },
        description: { type: String },
    }
    , {
        timestamps: true
    }
);

export default mongoose.model('Portfoliodata', portfolioSchema)

