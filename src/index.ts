import "reflect-metadata"
import {createConnection} from "typeorm"
import * as express from 'express'
import * as cors from 'cors'
import routes from './routes'
import './config/env'

createConnection({  
    type: 'postgres',
    host: String(process.env.HACKATRAN_HOST),
    database: String(process.env.HACKATRAN_DATABASE),
    port: 5434,
    username: String(process.env.HACKATRAN_USERNAME),
    password: String(process.env.HACKATRAN_PASSWORD),
    entities: [
        __dirname + '/database/entity/*.js'
    ],
    synchronize: true,
    logging: false
})
.then(response => {
    const server = express()
    const port: string | number = process.env.PORT || 5000
    server.use(cors())
    server.use(express.json())
    server.use(routes)

    //teste
    server.use('*', (request, response) => {
        response.send("<h1>E-Tran Online!!</h1>")
    })

    server.listen(port, () => {
        console.log('Servidor rodando na porta: ', port)
    })

    console.log('Conectado a base de dados com sucesso.')
})
.catch(error => console.error(error))