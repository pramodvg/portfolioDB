import mongoose from 'mongoose'

const aboutDataSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
    }
    , {
        timestamps: true
    }
)

export default mongoose.model("Aboutdata", aboutDataSchema)