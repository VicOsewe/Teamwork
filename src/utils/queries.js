export const createUserTable = `
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR DEFAULT '',
    last_name VARCHAR DEFAULT '',
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    gender VARCHAR,
    job_role VARCHAR,
    department VARCHAR,
    address VARCHAR
    )
 `;

export const insertUser = `
INSERT INTO users(first_name,last_name,email,password,gender,job_role,department,address)
VALUES ('vic', 'osewe', 'victorineosewe@gmail.com', 'password!','female', 'software developer','tech', 'Nairobi')
`;

export const dropUserTable = 'DROP TABLE users';
