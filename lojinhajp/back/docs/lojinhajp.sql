drop database if exists lojinhajp;
create database lojinhajp charset=UTF8 collate utf8_general_ci;
use lojinhajp;

create table  lancamentos(
    n_lan integer  not null primary key auto_increment,
    data_lancamento date not null,
    descricao varchar(50) not null,
    valor float (10,3),
    tipo varchar(10) not null

);

describe lancamentos;

show tables;



LOAD DATA INFILE 'F:/Pudim/2SEMESTRE/projetos_inteiros/lojinhajp/back/docs/lancamentos.csv'
INTO TABLE lancamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


select * from lancamentos;