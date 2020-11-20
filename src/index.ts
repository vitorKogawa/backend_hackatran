import "reflect-metadata"
import {createConnection} from "typeorm"
import * as express from 'express'
import * as cors from 'cors'
import routes from './routes'
import './config/env'

createConnection({  
    type: 'postgres',
    host: String(process.env.LOCAL_HOST),
    database: String(process.env.LOCAL_DATABASE),
    port: 5432,
    username: String(process.env.LOCAL_USERNAME),
    password: String(process.env.LOCAL_PASSWORD),
    entities: [
        __dirname + '/database/entity/*.ts'
    ],
    synchronize: true,
    logging: false
})
.then(response => {
    const server = express()
    const port = 3333
    server.use(cors())
    server.use(express.json())
    server.use(routes)
    server.listen(port, () => {
        console.log('Servidor rodando na porta: ', port)
    })

    console.log('Conectado a base de dados com sucesso.')
})
.catch(error => console.error(error))
