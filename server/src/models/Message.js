import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    momento: { type: String, required: true },
    mensaje: { type: String, required: true, trim: true },
    celular: { type: String, required: true, trim: true }
}, { timestamps: true });

export const Message = mongoose.model('Message', messageSchema);