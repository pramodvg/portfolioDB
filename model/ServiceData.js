import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema(
    {
        title1: { type: String, required: true },
        title2: { type: String, required: true },
        description: { type: String, required: true },
    }
    , {
        timestamps: true
    }
);

export default mongoose.model('Servicedata', serviceSchema)
