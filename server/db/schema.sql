CREATE TABLE user (
    user_id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fname VARCHAR(100),
    lname VARCHAR(100),
    date_of_birth VARCHAR(8),
    phone_numeber int,
    email VARCHAR(150)
) CREATE TABLE Car (
    car_id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    model VARCHAR(50),
    brand VARCHAR(50),
    range int,
    size VARCHAR(20),
    size VARCHAR(20),
    transmission BOOLEAN,
    passengers SMALLINT,
    efficiency INT,
    rate INT,
    reserved BOOLEAN,
    company_id INT,
    location_id INT
) CREATE TABLE rental_form (
    rental_id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    car_id INT,
    FOREIGN KEY car_id REFRENCES Car(car_id),
    company_id INT,
    FOREIGN KEY company_id REFRENCES Car(company_id),
    user_id INT,
    FOREIGN KEY company_id REFRENCES Car(company_id),
    company_id INT,
    FOREIGN KEY user_id REFRENCES user(user_id),
    location_id INT,
    FOREIGN KEY location_id REFRENCES Address(location_id),
) CREATE TABLE Address (
    address_id INT PRIMARY KEY,
    City VARCHAR(255) NOT NULL,
    Country VARCHAR(255) NOT NULL,
    PostalCode VARCHAR(20) NOT NULL,
    Airport VARCHAR(255) NULL
);
CREATE TABLE rental_company(
    company_id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    company_name VARCHAR(50),
    branch_location INT,
    FOREIGN KEY branch_location REFRENCES Address(address_id)
)