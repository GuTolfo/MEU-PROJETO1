create DATABASE posts;

use nutriplus;

drop table usuarios;

create table posts(
	id INT auto_increment primary key,
    title VARCHAR(255) not null,
    created_at TIMESTAMP DEFAULT current_timestamp
);

INSERT INTO posts(title) VALUES ("teste");

create table users(
	id int not null auto_increment primary key,
    name varchar(255),
    cidade varchar(255),
    password varchar(255),
    created_at timestamp default current_timestamp
);

select*from posts;
select*from users;
