USE lucas;

CREATE TABLE cadastro (
    id_pac INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    cpf VARCHAR(20) UNIQUE,
    telefone VARCHAR(30),
    tipo CHAR(10),
    medico VARCHAR(255),
    restricao TEXT
);

CREATE TABLE cuidadores (
    id_cuid INT PRIMARY KEY AUTO_INCREMENT,
    nome_cuid VARCHAR(255),
    cpf_cuid VARCHAR(20) UNIQUE,
    telefone_cuid VARCHAR(30),
    cod_cuid CHAR(25),
    id_pac VARCHAR(255),
    restricao_pac TEXT
);
