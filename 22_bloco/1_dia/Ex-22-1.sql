/*
Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. 
As informações a serem armazenadas sobre cada animal são:

Nome;
Espécie;
Sexo;
Idade;
Localização.

Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. 
Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais 
de um cuidador.
Siga os passos aprendidos no dia de hoje para modelar essa base de dados.
*/

CREATE DATABASE IF NOT EXISTS Zoologico;
USE Zoologico;

CREATE TABLE Gerente(
	Gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB; 

CREATE TABLE Cuidador(
	Cuidador_Id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Gerente_id INT NOT NULL,
    FOREIGN KEY (Gerente_id) REFERENCES Gerente(Gerente_id)
) ENGINE=InnoDB;

CREATE TABLE Especie(
	Especie_Id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB; 

CREATE TABLE Animal (
	Animal_Id INT PRIMARY KEY AUTO_INCREMENT,
	Nome_Animal VARCHAR(50) NOT NULL,
	Especie_ID INT NOT NULL,
	Sexo CHAR(1) NOT NULL,
	Ano_de_nascimento TINYINT NOT NULL,
	Localizacao VARCHAR(50) NOT NULL,
	Cuidador_Id INT NOT NULL,
    FOREIGN KEY (Especie_ID) REFERENCES Especie(Especie_ID),
    FOREIGN KEY (Cuidador_Id) REFERENCES Cuidador(Cuidador_Id)
) ENGINE=InnoDB;

