const checkRole = (req, res, next) => {
    

    if (!req.user) {
        return res.status(403).json({ message: 'Acceso denegado. Solo los administradores pueden realizar esta acción.' });
    }

    next();
};


const checkAdmin = (req, res, next) => {
    if (req.user.rol) {
        return res.status(401).json({ message: 'USUARIO NO IDENTIFICADO' });
    }

    if (req.user.rol !== 'admin') {
        return res.status(403).json({ message: 'Acceso denegado. Solo los administradores pueden realizar esta acción.' });
    }

    next();

}

module.exports = {
    checkRole,
    checkAdmin
}