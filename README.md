# API REST - Node.js + Prisma + PostgreSQL
API REST para la gestión de usuarios, construida con Node.js, Express y Prisma ORM sobre PostgreSQL, con endpoints paginados.
Incluye un frontend en React (Vite), en la carpeta `mi-frontend/`, que consume esta API.

## Demo 
🖥️ **Frontend (interfaz completa):** (https://api-rest-nodejs-prisma.vercel.app)

🔗 **API en vivo:** (https://api-rest-nodejs-prisma.onrender.com)

Para probar la API directamente (sin interfaz), usa un endpoint, por ejemplo:
```
https://api-rest-nodejs-prisma.onrender.com/usuarios
```

> Nota: El backend está en el plan gratuito de Render, así que puede tardar hasta 50 segundos en responder si estuvo inactivo un rato. Si el frontend tarda en cargar los usuarios la primera vez, es por esto — espera un momento y funciona normal. 

## Tecnologías 
- **Backend:** Node.js, Express, Prisma ORM.
- **Frontend:** React, Vite.
- **Base de datos:** PostgreSQL (alojada en Neon (https://neon.tech))
- **Deploy:** Render (backend) + Vercel (frontend)
- **Otros**: cors, dotenv

## Características
- Modelo `Usuario` con endpoint de listado paginado
- CRUD completo (crear, leer, actualizar, eliminar)
- Migraciones gestionadas con Prisma Migrate, aplicadas automáticamente en cada deploy
- Frontend en React que consume la API en vivo, con formulario de creación y listado paginado

## Endpoints principales
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/usuarios?pagina=1` | Lista usuarios, paginado (2 registros por página) |
| GET | `/usuarios/:id` | Obtiene un usuario por su id |
| POST | `/usuarios` | Crea un usuario nuevo |
| PUT | `/usuarios/:id` | Actualiza un usuario existente |
| DELETE | `/usuarios/:id` | Elimina un usuario |

## Instalación local
**Backend:**
```bash
git clone https://github.com/MarioWindranger/api-rest-nodejs-prisma
cd api-rest-nodejs-prisma
npm install
```

Crea un archivo `.env` con:
```
DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"
```

```bash
npx prisma migrate dev
npm start
```

**Frontend:**
```bash
cd mi-frontend
npm install
npm run dev
```

Por defecto, el frontend en local apunta a `http://localhost:3000` (respaldo definido en `src/config.js`). Si necesitas apuntar a otra URL, crea un `.env` en `mi-frontend/` con `VITE_API_URL=tu_url`.

## Lo que aprendí construyendo esto
- Modelado y consumo de una API REST con Prisma ORM
- Manejo de migraciones (drop-and-recreate vs rename de campos)
- Paginación de endpoints REST
- Backup/restore con `pg_dump`/`psql`
- Diferencias enre `npm` y `npx`, y el rol de Prisma CLI
- Deploy con base de datos: variables de entorno para credenciales, y por qué el build debe correr `prisma/generate` + `prisma migrate deploy` antes de arrancar el servidor
- Elegir un proveedor de base de datos sin fecha de expiración (Neon) para que el demo no se caiga solo con el tiempo
- Desplegar un frontend y backend en dominios separados (Vercel + Render), usando variables de entorno (`VITE_API_URL`) para conectar ambos sin hardcodear URLs
- Configurar el Root Directory en un monorepo (frontend dentro de una subcarpeta del mismo proyecto)
- Diferencias entre mayúsculas/minúsculas en nombres de archivo: Windows las ignora, Linux (donde corren Vercel/Render) no, causa de errores de "módulo no encontrado" en producción que no aparecen en local.

## Estructura del proyecto
```
api-rest-nodejs-prisma/
├── .env
├── .gitignore
├── README.md
├── index.js
├── package.json
├── package-lock.json
├── prisma/
│   ├── schema.prisma
│   ├── prisma.config.ts
│   └── migrations/
│       ├── 20260520213235_init/
│       ├── 20260602210721_agregue_email_usuario/
│       └── migration_lock.toml
└── mi-frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── config.js
        ├── ListaUsuarios.jsx
        ├── TarjetaUsuario.jsx
        ├── formulario.jsx
        ├── App.css
        ├── index.css
        └── assets/
```

## Autor
Mario — https://www.linkedin.com/in/mario-rend%C3%B3n-aguilar-abb13322a/
