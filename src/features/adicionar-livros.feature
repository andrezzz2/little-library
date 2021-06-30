Feature: Adicionar livro
	As a bibliotecário
	I want to adicionar um livro especificando o número de exemplares
	so that posso disponibilizar o livro no acervo para uso dos usuários
  
  Scenario: cadastrar livro sem titulo
    Given não existe livro com isbn 8535909559
	  When cadastrar livro
	  """
	  {
      "isbn": 8535909559,
      "autores": ["George Orwell"],
      "cdu": "821.111",
      "numero_exemplares": 9
	  }
	  """
	  Then receber status 400, mensagem: "Título requerido.”

  Scenario: cadastrar livro sucesso
	  Given não existe livro com isbn 8535909559
	  When cadastrar livro
	  """
	  {
      "isbn": 8535909559,
      "título": "A revolução dos bichos: Um conto de fadas",
      "autores": ["George Orwell"],
      "cdu": "821.111",
      "numero_exemplares": 9
	  }
	  """
	  Then receber status 200, mensagem: “Livro registrado.”
	  Then existe livro com isbn 8535909559
	
	Scenario: cadastrar livro existente
	  Given não existe livro com isbn 8535909559
	  When cadastrar livro
	  """
	  {
      "isbn": 8535909559,
      "título": "A revolução dos bichos: Um conto de fadas",
      "autores": ["George Orwell"],
      "cdu": "821.111",
      "numero_exemplares": 9
	  }
	  """
	  Then receber status 400, mensagem: “Existe um livro com esse isbn.”
	  Then existe livro com isbn 8535909559
