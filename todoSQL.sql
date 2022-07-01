DROP SCHEMA IF NOT EXISTS TodoList;
CREATE SCHEMA IF NOT EXISTS TodoList;
CREATE TABLE TodoList.List (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  todo TEXT NOT NULL,
  status TEXT NOT NULL,
  criado TEXT NOT NULL
);

INSERT INTO
  TodoList.List (todo, status, criado)
VALUES
  ("limpar casa", "pendente", "10-02-2011");