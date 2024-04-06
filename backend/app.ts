import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/user', async (req, res) => {
    const readUser = await prisma.user.findMany({})

    return res.status(200).json({
        status: 200,
        message: "Sucesso ao buscar usuário",
        data: readUser
    })
})

app.listen(3333, () => {
    console.log('server is running')
})