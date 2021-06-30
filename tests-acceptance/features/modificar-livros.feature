Feature: Modificar livro
	As a bibliotecário
	I want to modificar informações de um livro
	so that posso corrigir informações erradas e atualizar número de exemplares presentes no acervo
	
	Scenario: modificar livro existente
	  Given existe livro com isbn 8535909559
	  When modificar livro
	  """
	  {
      "isbn": 8535909559,
      "numero_exemplares": 8
	  }
	  """
	  Then existe livro com isbn 8535909559
	  Then livro com isbn 8535909559 tem
	  """
	  {
	      "numero_exemplares": 8
	  }
	  """
  
  Scenario: modificar livro não existente
	  Given não existe livro com isbn 8535909559
	  When modificar livro
	  """
	  {
      "isbn": 8535909559,
      "numero_exemplares": 8
	  }
	  """
	  Then receber status 400, mensagem: "Não existe livro com o isbn informado.”
	  Then não existe livro com isbn 8535909559
