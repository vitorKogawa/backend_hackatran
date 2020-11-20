import { Router } from 'express'
import InfracaoController from './controllers/InfracaoController'
import PerguntaController from './controllers/PerguntaController'
import AlternativaController from './controllers/AlternativaController'

const router = Router()

//ROTAS PARA GERENCIAMENTO DAS INFRACÇÕES.
router.post('/infracao', InfracaoController.store)
router.get('/infracao', InfracaoController.index)

//ROTAS PARA GERENCIAMENTO DAS PERGUNTAS.
router.post('/pergunta', PerguntaController.store)
router.get('/pergunta', PerguntaController.index)

//ROTAS PARA GERENCIAMENTO DAS ALTERNATIVAS.
router.post('/alternativa', AlternativaController.store)
router.get('/alternativa/:id_pergunta', AlternativaController.show)

export default router