export const validateMessage = (req, res, next) => {
    const { nombre, email, momento, mensaje, celular } = req.body;
    if (!nombre || !email || !momento || !mensaje || !celular) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email no válido.' });
    }
    next();
};