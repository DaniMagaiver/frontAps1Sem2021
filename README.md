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

## Git
Para manter a ordem no projeto, criar as funcionalidades e correções de bugs em
branchs separadas. Ex.:
Nova feature de login:
```
git checkout -b "feature/login" 
```
Correção de bug em login:
```
git checkout -b "fix/login_nomeCorrecao"
```
Enviar as branchs com pull request

Comandos úteis:
- Puxar estado atual da branch no git:
```
git pull origin [nome da branch]
```
- Criar nova branch no git:
```
git checkout -b [nome da branch]
```
- Adicionar alterações:
```
git add .
```
- Salvar alterações:
```
git commit -m "[Descrição das alterações feitas]"
```
- Enviando branch para seu fork do repositório:
```
git push origin [nome da branch]
```

[Guia prático de GIT](https://rogerdudler.github.io/git-guide/index.pt_BR.html)
[Como criar um pull request](https://www.digitalocean.com/community/tutorials/como-criar-um-pull-request-no-github-pt)