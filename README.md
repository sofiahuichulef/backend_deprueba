# API de Mascotas Virtuales

Esta es una API RESTful para gestionar mascotas virtuales, construida con Node.js, Express y MongoDB usando Mongoose.

## Requisitos Previos

- Node.js (versión 14 o superior)
- MongoDB (local o en la nube, como MongoDB Atlas)
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/sofiahuichulef/api-mascotas-virtuales.git
   cd api-mascotas-virtuales
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
   ```
   MONGO_URI=mongodb://localhost:27017/mascotas-virtuales
   PORT=3000
   ```

   - `MONGO_URI`: La URI de conexión a tu base de datos MongoDB. Si usas MongoDB Atlas, reemplaza con tu cadena de conexión.
   - `PORT`: El puerto en el que correrá el servidor (opcional, por defecto 3000).

2. Asegúrate de que MongoDB esté corriendo localmente o que tengas acceso a una instancia en la nube.

## Ejecución

Para ejecutar la API en modo desarrollo (con nodemon):
```bash
npm run dev
```

Para ejecutar en producción:
```bash
npm start
```

O directamente:
```bash
node src/server.js
```

El servidor debería iniciar en `http://localhost:3000` (o el puerto configurado).

## Uso

La API proporciona endpoints para gestionar mascotas virtuales. Algunos ejemplos:

- `GET /api/pets`: Obtener todas las mascotas
- `POST /api/pets`: Crear una nueva mascota
- `GET /api/pets/:id`: Obtener una mascota por ID
- `PUT /api/pets/:id`: Actualizar una mascota
- `DELETE /api/pets/:id`: Eliminar una mascota

Para más detalles, revisa los archivos en `src/routes/` y `src/controllers/`.

## Estructura del Proyecto

```
src/
├── index.js          # Punto de entrada
├── server.js         # Configuración del servidor
├── controllers/      # Controladores de la API
├── database/         # Configuración de la base de datos
├── models/           # Modelos de Mongoose
└── routes/           # Definición de rutas
```

## Notas Importantes

- Asegúrate de que la variable `MONGO_URI` esté correctamente configurada en tu archivo `.env`.
- Si encuentras errores de conexión a MongoDB, verifica que la URI sea correcta y que MongoDB esté accesible.
- La API usa JWT para autenticación (si está implementado en los controladores).

## Contribución

Si deseas contribuir, por favor crea un issue o un pull request en el repositorio.

## Licencia

Este proyecto está bajo la licencia ISC.