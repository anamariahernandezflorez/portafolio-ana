import 'dotenv/config';

const requiredVars = ['MONGODB_URI', 'RESEND_API_KEY', 'CONTACT_EMAIL'];
const missingVars = requiredVars.filter((name) => !process.env[name]);

if (missingVars.length > 0) {
    throw new Error(`Faltan variables de entorno: ${missingVars.join(', ')}`);   
}

export const env = {
    port: process.env.PORT || 3000,
    mongodbUri: process.env.MONGODB_URI,
    resendApiKey: process.env.RESEND_API_KEY,
    contactEmail: process.env.CONTACT_EMAIL
};