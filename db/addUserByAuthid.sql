INSERT INTO my_users
    (name, auth_id,picture)
VALUES
    ($1, $2,
        $3)
RETURNING *;