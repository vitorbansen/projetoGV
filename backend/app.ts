import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.get('/user', async (req, res) => {
    const readUser = await prisma.user.findMany({})

    return res.status(200).json({
        status: 200,
        message: "Sucesso ao buscar usuário",
        data: readUser
    })
})

app.listen(3333, () => {
    console.log('VAMOOO')
})