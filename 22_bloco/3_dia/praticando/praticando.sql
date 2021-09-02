/*
dia 22.3 |Transformando ideias em um modelo de banco de dados - Parte 2

Para clonar uma tabela, é preciso fazer apenas um comando:
-- CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;
CREATE TABLE actor_clone LIKE sakila.actor;

Esse comando não copia os dados, apenas a estrutura;
Caso não especifique qual banco de dados utilizar, a nova tabela será inserida no banco que estiver
no momento da execução. Sendo assim, sempre especifique o bando de dados;
*/

/* USE nome_do_banco_de_dados;
CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;
*/

use sakila;
create table film_clone LIKE sakila.film;

/*
-- Defina em qual banco a view será criada
USE nome_do_banco_de_dados;

-- Comando para criar a view
CREATE VIEW nome_da_view AS query;
*/

/*
Um exemplo de uso
Suponha que a gerência quer ter uma maneira simples para sempre saber quem são os top 10 
clientes que mais compram com a empresa. Pode-se criar uma view para resolver isso
*/
create view top_10_customers AS 
	select c.customer_id,
		c.first_name,
		SUM(p.amount) AS total_amount_spent
	from sakila.payment p
	inner join sakila.customer c on p.customer_id = c.customer_id
	group by customer_id
	order by total_amount_spent DESC
	limit 10;
    
-- Agora, caso alguém precise ter acesso a essa informação, você pode consultar a tabela temporária 
-- ( VIEW ) diretamente, sem a necessidade de montar uma nova query.
select * from top_10_customers;    

-- Para excluir uma VIEW , use o seguinte comando:
drop view nome_da_view;
---------------------------------------------------------------------------------------------------

/*
Tudo que você deve saber sobre o ALTER TABLE
Algo extremamente comum durante o ciclo de desenvolvimento de software é a necessidade constante 
de fazer melhorias na estrutura do banco de dados. As tabelas são uma dessas estruturas que podem 
sofrer alterações.
Ao executar o bloco de código abaixo, a tabela noticia será criada. Essa tabela será utilizada 
como exemplo para testar modificações em sua estrutura
*/

use sakila;
create table noticia(
	noticia_id int primary key,
    titulo varchar(100),
    historia varchar(300)
) engine = InnoDB;

-- Adicione uma nova coluna
alter table noticia add column data_postagem date not null;

-- Modificar o tipo e propriedades de uma coluna
-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
alter table noticia modify noticia_id bigint auto_increment;

-- alterar o tipo e nome de uma coluna
alter table noticia CHANGE historia conteudo_postagem varchar(1000) not null;

-- Dropar/Excluir uma coluna
alter table noticia drop column data_postagem;

-- Adicionar uma nova coluna após outra
alter table noticia add column data_postagem datetime not null after titulo;

-- Para confirmar se a estrutura da sua tabela foi alterada corretamente
show columns from sakila.noticia;

-----------------------------------------------------------------------------------------------------

/* 
DROPando uma tabela
drop table nome_da_tabela;
Ponto Importante
Você não conseguirá dropar (excluir) uma tabela que é referenciada por uma restrição 
de chave estrangeira. A chave estrangeira ou a tabela que a contém deve ser excluída antes.
*/

-- drop table sakila.language;

----------------------------------------------------------------------------------------------------
-- Como usar um INDEX

 -- Criando um índice em uma coluna
-- CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
-- CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice ON tabela (coluna1, coluna2);

-- Excluindo índices
-- DROP INDEX nome_do_indice ON tabela;

create index index_first_name on sakila.actor(first_name);

select * 
from sakila.actor
where first_name = 'RITA';

drop index index_first_name on sakila.actor;

/*
Entenda o impacto do FULLTEXT INDEX
Hora de fazer outro exemplo para analisar o impacto que um FULLTEXT INDEX , 
em conjunto com uma full-text search, , possui na performance de uma query. 
Para esse exemplo será alterada a coluna address da tabela sakila.address . 
Veja a criação do índice logo abaixo:
*/
create FULLTEXT index index_address on sakila.address(address);

/*
Para verificar a diferença na performance, deve-se utilizar os comandos MATCH e AGAINST , 
conforme foi visto anteriormente no texto sobre full-text search. . 
Execute a query abaixo e verifique seu custo através do execution plan:
*/
select * from sakila.address where MATCH(address) against('drive');

DROP INDEX index_address ON sakila.address;

select * from sakila.address where address like '%drive%';

-- Entenda o impacto do UNIQUE INDEX

-- A Sintaxe para criar um UNIQUE INDEX é a seguinte:
-- CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);

-- Para dropar (excluir), pode-se usar:
-- DROP INDEX nome_do_indice ON nome_tabela;

-- Isso pode ser confirmado usando o comando SHOW INDEX , que lista os detalhes sobre um índice em uma tabela. Veja abaixo um exemplo de uso do comando.
show index from sakila.actor;

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);


SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

DROP INDEX unique_name_index ON sakila.language;

/*
Quando não utilizar índices
Mesmo notando que os resultados foram favoráveis para o uso de índices nesses exemplos, é 
importante ressaltar que eles nem sempre devem ser utilizados. Abaixo, segue uma lista das 
situações em que o uso de índices deve ser evitado:
Em tabelas pequenas, pois a diferença de performance será mínima, se houver;
Em colunas que retornarão uma grande quantidade dados quando filtradas. Por exemplo, 
você não adicionaria os artigos "o" e "a" ao índice de um livro;
Em tabelas que frequentemente têm atualizações em grande escala, uma vez que a performance 
dessas atualizações será afetada;
Em colunas que são frequentemente manipuladas, haja vista que a manutenção do índice dessa 
coluna pode demandar muito tempo quando feita em excesso;
Em colunas que possuem muitos valores nulos.
*/
