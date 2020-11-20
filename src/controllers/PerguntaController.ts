import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Perguntas } from '../database/entity/Perguntas'

class PerguntaController {
    async store(request: Request, response: Response){
        const repository = getRepository(Perguntas)
        const {
            texto_pergunta,
            infracao
        } = request.body

        const data = { 
            texto_pergunta,
            infracao
        }

        const new_pergunta = repository.create(data)
        await repository.save(new_pergunta)

        return response.json(new_pergunta)
    }

    async index(request: Request, response: Response){
        const repository = getRepository(Perguntas)
        const all_perguntas = await repository.find()

        if(all_perguntas.length <= 0)
            return response.json({
                message: 'Nenhuma pergunta cadastrada na base de dados.'
            })
        
        return response.json(all_perguntas)
    }
}

export default new PerguntaController()