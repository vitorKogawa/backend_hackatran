import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Infracoes } from '../database/entity/Infracoes'

class InfracaoController {
    async store(request: Request, response: Response){
        const repository = getRepository(Infracoes)
        const { texto_infracao } = request.body

        const data = { texto_infracao }

        const new_infracao = repository.create(data)
        await repository.save(new_infracao)

        return response.json(new_infracao)
    }

    async index(request: Request, response: Response){
        const repository = getRepository(Infracoes)
        const all_infracoes = await repository.find()

        if(all_infracoes.length <= 0)
            return response.json({
                message: 'Nenhuma infração cadastrada na base de dados.'
            })
        
        return response.json(all_infracoes)
    }
}

export default new InfracaoController()