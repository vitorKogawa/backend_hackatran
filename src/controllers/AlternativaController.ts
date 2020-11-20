import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Alternativa } from '../database/entity/Alternativa'

class AlternativaController {
    async store(request: Request, response: Response){
        const repository = getRepository(Alternativa)
        const {
            texto_alternativa,
            isCorrect,
            pergunta
        } = request.body

        const data = { 
            texto_alternativa,
            isCorrect,
            pergunta
        }

        const new_alternativa = repository.create(data)
        await repository.save(new_alternativa)

        return response.json(new_alternativa)
    }

    async show(request: Request, response: Response){
        const repository = getRepository(Alternativa)
        const { id_pergunta } = request.params

        const all_alternativa_from_pergunta = await repository.createQueryBuilder('alternativa')
        .where('alternativa.pergunta = :id', { id: id_pergunta })
        .getMany()

        if(all_alternativa_from_pergunta.length <= 0)
            return response.json({ message: 'Nenhum alternativa foi cadastrada para está pergunta ainda.' })

        return response.json(all_alternativa_from_pergunta)
    }
}

export default new AlternativaController()