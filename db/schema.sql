
-- CREATE DB and TABLE burgers if not exists

CREATE database burgers_db;
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
