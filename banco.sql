drop database banco1022b;
create database banco1022b;
USE banco1022b;
CREATE TABLE IF NOT EXISTS produtos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2),
    imagem VARCHAR(300)
);
INSERT INTO produtos VALUES (1,'Iphone','Celular RUIM',5000.50,'https://imgs.casasbahia.com.br/55067451/1g.jpg');
