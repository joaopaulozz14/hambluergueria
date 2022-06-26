Precisamos criar:

users.module.ts
users.controller.ts
users.service.ts
users.module.ts:

X definir a classe do modulo 
X exportar nossa classe 
X colocar o decorator de modulo 
X colocar as informações que o decorador deve receber (inicialmente vazias)

Relacionar controller
Relacionar provider (service)
users.controller.ts:

X definir a classe do controller 
X exportar nossa classe 
X colocar o decorator do controller 
X definir a rota do controller 
X criar o construtor, relacionando o service que ainda não existe

definir as nossas rotas (create e readAll)
colocar a chamada das funções do service nas rotas
users.service.ts X definir a classe do service X exportar nossa classe X colocar o decorator de service (Injectable)

definir os métodos que estão sendo utilizados pelo controller