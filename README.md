# API REST con Node.js, Express, Prisma y PostgreSQL

API REST completa con operaciones CRUD sobre una base de datos PostgreSQL,
construida con Node.js, Express y Prisma ORM.

## Tecnologías usadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL

## Instalación

1. Clona el repositorio
   git clone https://github.com/tu-usuario/mi-proyecto-db.git

2. Instala las dependencias
   npm install

3. Crea un archivo .env en la raíz con tu URL de PostgreSQL
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/miproyecto?schema=public"

4. Ejecuta las migraciones
   npx prisma migrate dev

5. Inicia el servidor
   node index.js

## Endpoints

| Método | Ruta           | Descripción              |
|--------|----------------|--------------------------|
| GET    | /usuarios      | Obtener todos            |
| GET    | /usuarios/:id  | Obtener uno por id       |
| POST   | /usuarios      | Crear usuario nuevo      |
| PUT    | /usuarios/:id  | Actualizar usuario       |
| DELETE | /usuarios/:id  | Eliminar usuario         |

## Modelo de datos

Usuario: id, nombre, ciudad, edad
Pedido: id, producto, precio, usuarioId