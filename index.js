const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

/* GET - obtener todos los usuarios. Para Express, /usuarios?pagina=1 y /usuarios son la misma ruta. El ?pagina=1 es un 
query parameter, no forma parte de la ruta, es información adicional que va después del ? Como el query es información adicional
del endpoint, no afecta el endpoint /usuarios. Esa información adicional es tomada opcionalmente por el query si es que existe.*/ 
app.get('/usuarios', async (req, res) => {
  const pagina = Number(req.query.pagina) || 1 // el query es informacion adicional que viaja en la URL del cliente.
  const registros = 2

  const usuarios = await prisma.usuario.findMany({
    skip: (pagina - 1) * registros,
    take: registros
  })

  res.json(usuarios) // CUIDADO a la hora de escribir endpoints iguales con las mismas peticiones (ej: GET) en nuestras API'S.
})

// GET - obtener un usuario por id
app.get('/usuarios/:id', async (req, res) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id: Number(req.params.id) }
  })
  res.json(usuario)
})

// POST - crear un usuario nuevo
app.post('/usuarios', async (req, res) => {
  const usuario = await prisma.usuario.create({
    data: req.body
  })
  res.json(usuario)
})

// PUT - actualizar un usuario
app.put('/usuarios/:id', async (req, res) => {
  const usuario = await prisma.usuario.update({
    where: { id: Number(req.params.id) },
    data: req.body
  })
  res.json(usuario)
})

// DELETE - eliminar un usuario
app.delete('/usuarios/:id', async (req, res) => {
  await prisma.usuario.delete({
    where: { id: Number(req.params.id) }
  })
  res.json({ mensaje: 'Usuario eliminado' })
})

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})
