-- This file initializes your database. An example is given below. This file is not required - the table may be set up separately.

create table if not exists tablename (
    id SERIAL PRIMARY KEY,
    column2 TEXT UNIQUE,
    column3 DECIMAL,
    column4 INT,
    column5 FLOAT UNIQUE
);

insert into tablename (column2, column3, column4, column5) values ('value1', 1.1, 2, 3.3);

-- SQL Select Statements
-- DISTINCT
-- count(column)
-- avg(column)
-- sum(column)
-- WHERE column LIKE val%(wildcard)_(single wildcard)
-- AND/OR/IS/IS NOT
-- ORDER BY column ASC/DESC
-- LIMIT (number of returned items)
-- JOIN table t ON t.id = t.id
-- WHERE IN (SELECT FROM WHERE)
-- GROUP BY column