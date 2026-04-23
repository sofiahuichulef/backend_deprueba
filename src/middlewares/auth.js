





//verificar el token en cada solicitud protegida
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;    
    if (!authHeader  || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token de autenticación requerido' });
    }

    const token = authHeader.split(' ')[1]; // Extraer el token del encabezado


    try{
        const payload = jwt.verify(token, "secret_key"); // Verificar el token con la clave secreta
        req.user = payload;

        next(); // Continuar con la siguiente función de middleware o ruta  
    } catch (error) {
        return res.status(401).json({ message: 'Token de autenticación inválido' });
    }

}

    module.exports = auth;