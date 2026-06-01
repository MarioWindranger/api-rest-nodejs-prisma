const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

// GET - obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany()
  res.json(usuarios)
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
