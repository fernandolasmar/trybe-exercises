CREATE DATABASE IF NOT EXISTS aula_bloco_26_1;

USE aula_bloco_26_1;

DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(20 NOT NULL),
  cartoon VARCHAR(40) NOT NULL,
  CONSTRAINT pk_characters PRIMARY KEY (id)
);

INSERT INTO `aula_bloco_26_1`.`characters`
(
  `name`,
  `cartoon`)
  VALUES
  ('Abigail', 'KND - A Turma do Bairro'),
  ('Corvo', 'Solar Opposites'),
  ('Dexter', 'Labolatório de Dexter');
  