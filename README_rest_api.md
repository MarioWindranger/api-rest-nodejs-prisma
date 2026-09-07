# API REST — Node.js + Prisma + PostgreSQL

## Descripción

API REST para la gestión de usuarios, construida con Node.js, Express y Prisma ORM sobre PostgreSQL, con endpoints paginados. Incluye un frontend en React (Vite), en la carpeta `mi-frontend/`, que consume esta API.

## Tecnologías

- **Runtime:** Node.js
- **Framework:** Express
- **ORM:** Prisma
- **Base de datos:** PostgreSQL
- **Librerías:** React 

## Características

- Modelo `Usuario` con endpoints paginados (GET con `limit`/`offset` o `page`)
- Relación uno-a-muchos entre `Usuarios` y `Pedidos`
- Seed de base de datos para poblar datos de prueba
- Migraciones gestionadas con Prisma Migrate

## Endpoints principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/usuarios?pagina=1` | Lista usuarios, paginado (2 registros por página) |
| GET | `/usuarios/:id` | Obtiene un usuario por su id |
| POST | `/usuarios` | Crea un usuario nuevo |
| PUT | `/usuarios/:id` | Actualiza un usuario existente |
| DELETE | `/usuarios/:id` | Elimina un usuario |

## Instalación local

```bash
git clone https://github.com/MarioWindranger/api-rest-nodejs-prisma
cd api-rest-nodejs-prisma
npm install
```

Crea un archivo `.env` con:
```
DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"
```

Luego:
```bash
npx prisma migrate dev
npx prisma db seed
npm start
```

## Lo que aprendí construyendo esto

- Modelado de relaciones muchos-a-muchos en Prisma
- Manejo de migraciones (drop-and-recreate vs. rename de campos)
- Paginación de endpoints REST
- Backup/restore con `pg_dump`/`psql`
- Diferencias entre `npm` y `npx`, y el rol de Prisma CLI

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
        ├── Listausuarios.jsx
        ├── Tarjetausuario.jsx
        ├── formulario.jsx
        ├── App.css
        ├── index.css
        └── assets/
```

## Autor

Mario — [tu LinkedIn/portafolio aquí]
