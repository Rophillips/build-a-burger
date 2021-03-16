DROP DATABASE IF EXISTS burgers_db;

-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
USE burgers_db;
-- Create a burgers table with these fields:
CREATE TABLE burgers (
    -- id: an auto incrementing int 
    id INT NOT NULL AUTO_INCREMENT,
    --    burger_name: a string.
    burger_name VARCHAR(100) NOT NULL,
    --    devoured: a boolean.
    devoured BOOLEAN DEFAULT false,
    -- setting id as primary key
    PRIMARY KEY (id)
);

