# FrontAps1sem2021

## Como rodar o projeto pela primeira vez:
1. Instalar dependências:
```
npm install
```
2. Rodar servidor mock e angular:
```
npm run all
```

## Servidor
O servidor roda com um banco de dados em json gerando as tabelas com dados randômicos.
Conforme a necessidade podemos ir gerando novas tabelas dentro da pasta 'models' e as
populando dentro do index.js.
Veja as documentações das bibliotecas utilizadas aqui:
- Servidor: [JSON Server](https://github.com/typicode/json-server)
- Seeder: [Casual](https://github.com/boo1ean/casual)

Obs:
- A porta do servidor mock (simulado) é **http://localhost:3001**
- Para ver todos usuários  **http://localhost:3001/users**
