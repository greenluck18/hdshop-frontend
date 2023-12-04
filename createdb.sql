CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    first_name VARCHAR (250) NOT NULL,
    last_name VARCHAR (250) NOT NULL,
    email VARCHAR (250) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS items(
    id serial PRIMARY KEY,
    name VARCHAR (250) NOT NULL,
    price FLOAT NOT NULL,
    description VARCHAR (1000) NOT NULL,
    image VARCHAR (250),
    tradeId INT
);

create table IF NOT EXISTS receipts(
    id serial PRIMARY KEY,
    files JSON
);

create table IF NOT EXISTS payment_methods(
    id serial PRIMARY KEY,
    name VARCHAR (250) NOT NULL
);

create table IF NOT EXISTS payments(
    id serial PRIMARY KEY,
    payment_method_id INT NOT NULL,
    user_id INT NOT NULL,
    amount FLOAT NOT NULL,
    receipt_id INT NOT NULL,
    FOREIGN KEY (payment_method_id) REFERENCES payment_methods (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (receipt_id) REFERENCES receipts (id)
);

CREATE TABLE IF NOT EXISTS payment_items(
    id serial PRIMARY KEY,
    payment_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (payment_id) REFERENCES payments (id),
    FOREIGN KEY (item_id) REFERENCES items (id)
);

create table IF NOT EXISTS users_items(
    id serial PRIMARY KEY,
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (item_id) REFERENCES items (id)
);

