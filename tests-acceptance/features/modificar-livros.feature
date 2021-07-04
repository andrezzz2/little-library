Feature: Modificar livro
  As a bibliotecário
  I want to modificar informações de um livro
  so that posso corrigir informações erradas e atualizar número de exemplares presentes no acervo
  
  Scenario: modificar livro existente
    Given existe livro com isbn 8535909559
    When modificar livro com isbn 8535909559
    """
    {
      "numero_exemplares": 8
    }
    """
    Then deveria existir livro com campos
    """
    {
      "isbn": 8535909559,
      "numero_exemplares": 8
    }
    """
  
  Scenario: modificar livro não existente
    Given não existe livro com isbn 8535909559
    When modificar livro com isbn 8535909559
    """
    {
      "numero_exemplares": 8
    }
    """
    Then deveria receber status 404
    Then não deveria existir livro com isbn 8535909559
