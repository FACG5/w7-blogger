BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    password VARCHAR(100),
    rule VARCHAR(100) DEFAULT 'user'
);

INSERT INTO users (name,email,password,rule) VALUES
('asala','asalamatarya@gmail.com','asala@123','admin'),
('ali','ali.ali@gmail.com','ali23','admin'),
('othman','othman@gmail.com','oth123','admin'),
('salwa','salwa@gmail.com','soso22','admin'),
('karam','karam@gmail.com','karam44','user'),
('hala','hala@gmail.com','hala33','user');


 CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    post_title VARCHAR(100),
    post_body TEXT,
    date DATE  DEFAULT NOW(),
    time TIME DEFAULT NOW(),
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO posts (post_title,post_body,date,user_id)
VALUES
('test post 1','post body 1','2018-08-15',1),
('test post 2','post body 2','2018-08-12',5),
('test post 3','post body 3','2018-08-13',6),
('test post 4','post body 4','2018-08-13',6),
('test post 5','post body 5','2018-08-14',5);
COMMIT;