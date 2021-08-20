-- Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .
-- Basta clicar com botão direito na tabela e clicar em "select rows - limit 200"
SELECT * FROM sakila.actor;

-- Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .
-- basta clicar em create tableFilme

-- Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
-- tabela criada

-- Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
select * from country;
-- ela faz referencia a tabela country

-- Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?
-- N:1

-- Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
-- 1:N

-- Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
-- store -> staff
-- language -> film
-- film -> language

