Feature: Adicionar livro
	As a bibliotecário
	I want to adicionar um livro especificando o número de exemplares
	so that posso disponibilizar o livro no acervo para uso dos usuários

Scenario: cadastrar livro sucesso
	Given não existe livro com isbn: [isbn]
	When cadastrar livro com isbn [], titulo: [], autores: [], data publicação: [], cdu: [], tags: [], numero exemplares: []
	Then receber status “200: Ok”, mensagem: “Livro registrado.”
	Then existe livro com isbn: [isbn]

Scenario: cadastrar livro sem título falha
	Given não existe livro com isbn [isbn]
	When cadastrar livro com isbn[], autores: [], data publicação: [], cdu: [], tags: []
	Then receber status ”400: Bad Request", mensagem: "Título requerido.”

Scenario: cadastrar livro existente falha
	Given existe livro com isbn [isbn]
	When cadastrar livro com isbn [], titulo: [], autores: [], data publicação: [], cdu: [], tags: [], numero exemplares: []
	Then receber status “400: Bad Request”, mensagem: “Existe um livro com esse isbn.”

Scenario: cadastrar livro com numero de exemplares negativo falha
	Given existe livro com isbn [isbn]
	When cadastrar livro com isbn [], titulo: [], autores: [], data publicação: [], cdu: [], tags: [], numero exemplares: []
	Then receber status “400: Bad Request”, mensagem: “O número de exemplares deve ser não-negativo.”

