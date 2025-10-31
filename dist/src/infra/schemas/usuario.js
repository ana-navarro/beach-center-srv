import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
export const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 8, max: 64, required: true },
    tipo: { type: String, enum: ['administrador', 'cliente', 'professor'], required: true },
}, {
    timestamps: true
});
usuarioSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
const Usuario = mongoose.model('usuario', usuarioSchema);
export default Usuario;
