## Instalação e utilização
- Clone o projeto
- yarn
- yarn dev:server

## Tecnologias/frameworks/libs
- Node.js
- Typescript
- Express
- TypeORM
- Sqlite3
- uuid
- yup

## Rotas disponíveis
Create - POST http://localhost:3333/points/
Enviar, via JSON (troque os valores XXX pelos valores desejados)
{
	"name": "XXX",
	"city": "XXX",
	"state": "XX",
	"reference": "XXXX",
	"description": "XXXXXX"
}

Show - GET http://localhost:3333/points/
Sem body para envio

searchByName - GET http://localhost:3333/points/XXX
Por parâmetro, enviar o nome, ou parte dele.