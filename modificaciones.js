const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  try {
    const resultado = await prisma.$transaction([
      prisma.pedido.create({
        data: { producto: 'cámara', precio: 999, usuarioId: 1 }
      }),
      prisma.pedido.create({
        data: { producto: 'monitor', precio: 450, usuarioId: 19 }  
      })
    ])
    console.log('Transacción exitosa:', resultado)

  } catch (error) {
    console.log('Transacción fallida — todo revertido:', error.message)
  }

  const pedidos = await prisma.pedido.findMany()
  console.log(pedidos);
  
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())

