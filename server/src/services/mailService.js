import { Resend } from 'resend';
import { env } from '../config/env.js'; // ← ¡CAMBIO AQUÍ! (../ en vez de ./)

const resend = new Resend(env.resendApiKey);

export const sendContactEmail = async (data) => {
    try {
        const { data: emailData, error } = await resend.emails.send({
            from: 'Portafolio Ana <onboarding@resend.dev>',
            to: env.contactEmail,
            subject: `Nuevo mensaje de ${data.nombre} - Portafolio`,
            html: `
                <h2 style="color: #7A2048;">Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${data.nombre}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Celular/WhatsApp:</strong> ${data.celular}</p>
                <p><strong>Momento actual:</strong> ${data.momento}</p>
                <p><strong>Mensaje:</strong> ${data.mensaje}</p>
            `
        });

        if (error) {
            console.error('Error al enviar email:', error);
            throw new Error('Error al enviar el correo de notificación');
        }

        return emailData;
    } catch (error) {
        console.error('Error en sendContactEmail:', error);
        throw error;
    }
};