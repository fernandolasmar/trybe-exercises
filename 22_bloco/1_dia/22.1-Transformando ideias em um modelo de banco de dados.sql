-- Criando tabela
-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
-- CREATE DATABASE nome_do_banco_de_dados;
-- IF NOT EXISTS nome_do_banco_de_dados;

-- CREATE DATABASE IF NOT EXISTS Biblioteca;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
use Biblioteca;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
-- CREATE SCHEMA nome_do_banco_de_dados;

-- Craindo tabela autor
CREATE TABLE Autor (
Autor_id INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(100)
);

CREATE TABLE Cliente (
Cliente_id INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(100)
);

CREATE TABLE Categoria (
Categoria_id INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(100)
);

-- FOREIGN KEY para fazer referencia
CREATE TABLE Livro (
Livro_id INT PRIMARY KEY AUTO_INCREMENT,
Titulo_id VARCHAR(100),
Categoria_id INT NOT NULL,
Autor_id INT NOT NULL,
FOREIGN KEY (Categoria_id) REFERENCES Categoria (Categoria_id),
FOREIGN KEY (Autor_id) REFERENCES Autor (Autor_id)
);

-- Veremos um exemplo para ilustrar a utilização de uma chave primária composta, considere a seguinte tabela:
DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
USE Brasil;

CREATE TABLE cidades(
	cidade VARCHAR(100) NOT NULL,
	estado VARCHAR(10) NOT NULL,
	populacao INTEGER,
    CONSTRAINT PRIMARY KEY(cidade)
);

-- Veja que foi criada uma chave primária simples utilizando o campo cidade . Agora considere o exemplo abaixo que irá inserir os dados das cidades de Rio Claro/SP e Rio Claro/RJ na tabela criada:
INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
('Rio Claro','RJ',17216);

-- No exemplo acima teremos um erro , pois há uma violação da chave primária, já que o nome "Rio Claro" será duplicado e isto não é permitido. A solução para o problema acima é criarmos uma chave primária composta . A chave composta é aquela criada com duas ou mais colunas e, desta forma, passa a utilizar a junção desses dados para formar um valor único e assim bloquear a duplicidade. Veja sua implementação no exemplo abaixo:
DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
USE Brasil;

CREATE TABLE cidades(
	cidade VARCHAR(100) NOT NULL,
	estado VARCHAR(10) NOT NULL,
	populacao INTEGER,
	CONSTRAINT PRIMARY KEY(cidade, estado)
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
('Rio Claro','RJ',17216);
          