import { Router } from 'express'
import { UsersController } from './controllers/usersControllers'

const routes = Router()
const usersController = new UsersController()
//Quatro métodos principais com API Jest no servidor
//GET - Ler os dados
//POST - Criar os dados
//PUT/PATCH - Editar os dados
//DELETE - Deletar os dados

routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

//STATUS CODE
//200 e 201
//404

export { routes }