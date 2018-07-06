-- This file will update values on a table in the database
update tablename set columnname = $2 where columnname = $1 -- Generally, use id for $1 and columnname