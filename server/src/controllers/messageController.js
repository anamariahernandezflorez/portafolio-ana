import { Message } from '../models/Message.js';
import { sendContactEmail } from '../services/mailService.js'; // ← ¡CAMBIO AQUÍ!

export const createMessage = async (req, res, next) => {
    try {
        // 1. Guardar en la base de datos
        const newMessage = new Message(req.body);
        await newMessage.save();

        // 2. Enviar el correo de notificación a Ana
        await sendContactEmail(req.body);

        // 3. Responder al cliente (tu formulario en React)
        res.status(201).json({ 
            success: true,
            message: 'Mensaje enviado exitosamente. Ana revisará tu información y se pondrá en contacto contigo.' 
        });
    } catch (error) {
        next(error); // Pasa el error al middleware ErrorHandler
    }
};