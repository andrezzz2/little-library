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
    Then deveria receber status 400

  Scenario: cadastrar livro sucesso
    Given não existe livro com isbn 8535909559
    When cadastrar livro
    """
    {
      "isbn": 8535909559,
      "titulo": "A revolução dos bichos: Um conto de fadas",
      "autores": ["George Orwell"],
      "cdu": "821.111",
      "numero_exemplares": 9
    }
    """
    Then deveria receber status 201
    Then deveria existir livro com isbn 8535909559
  
  Scenario: cadastrar livro existente
    Given existe livro com isbn 8535909559
    When cadastrar livro
    """
    {
      "isbn": 8535909559,
      "titulo": "A revolução dos bichos: Um conto de fadas",
      "autores": ["George Orwell"],
      "cdu": "821.111",
      "numero_exemplares": 9
    }
    """
    Then deveria receber status 500
    Then deveria existir livro com isbn 8535909559
