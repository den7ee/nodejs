import { Request } from 'express';
import { makeMockResponse } from "../mocks/mockResponse";
import { UsersController } from "./usersControllers"

//Padrão Aaa: Arrange
describe('Users Controller', ()=>{
    const usersController = new UsersController();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()

    //Padrão aAa: Act
    it('Deve listar usuários', ()=> {
        usersController.listarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(3)
    })

    it('Deve criar novo usuário', ()=> {
        mockRequest.body = {
            name: 'Novo usuário'
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({'mensagem':`Usuário Novo usuário criado com sucesso`})
    })

    it('Não deve criar um usuário em branco', ()=> {
        mockRequest.body = {
            name: ''
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem:`Não é possível criar usuários sem um nome`})
    })
        //Padrão aaA: Assert
})