

CREATE TABLE users (
        id int4 NOT NULL,
        "name" varchar(255) NULL,
        username varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        address json NULL,
        phone varchar(255) NULL,
        website varchar(255) NULL,
        company json NULL,
        CONSTRAINT users_email_key UNIQUE (email),
        CONSTRAINT users_id_key UNIQUE (id),
        CONSTRAINT users_username_key UNIQUE (username)
);


