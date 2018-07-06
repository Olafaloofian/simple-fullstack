-- This file will create a new entry into your table in the database
INSERT INTO tablename (column2, column3, column4, column5) values ($1, $2, $3, $4)  -- The $# values are placeholders to pass data into
returning *;