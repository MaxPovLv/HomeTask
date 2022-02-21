// - Створити функцію конструктор для об'єктів User з полями id, name,
// surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, '2', '3', '4', '5'),
    new User(2, '2', '3', '4', '5'),
    new User(3, '2', '3', '4', '5'),
    new User(4, '2', '3', '4', '5'),
    new User(5, '2', '3', '4', '5'),
    new User(6, '2', '3', '4', '5'),
    new User(7, '2', '3', '4', '5'),
    new User(8, '2', '3', '4', '5'),
    new User(9, '2', '3', '4', '5'),
    new User(10, '2', '3', '4', '5'),
];

console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши
// тільки об'єкти з парними id (filter)

let filterUsers = users.filter((item) => {
    if (item.id % 2 === 0) {
        return item
    }
})

console.log(filterUsers)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id.
// по зростанню (sort)

let sortUsers = users.sort((a, b) => a.id - b.id);

console.log(sortUsers)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, '2', '3', '4', '5',['thing1','thing2']),
    new Client(2, '2', '3', '4', '5',['thing1','thing2']),
    new Client(3, '2', '3', '4', '5',['thing1','thing2','thing3','thing4']),
    new Client(4, '2', '3', '4', '5',['thing1','thing2']),
    new Client(5, '2', '3', '4', '5',['thing1','thing2','thing3']),
    new Client(6, '2', '3', '4', '5',['thing1','thing2']),
    new Client(7, '2', '3', '4', '5',['thing1','thing2','thing3']),
    new Client(8, '2', '3', '4', '5',['thing1','thing2']),
    new Client(9, '2', '3', '4', '5',['thing1','thing2','thing3','thing4']),
    new Client(10, '2', '3', '4', '5',['thing1','thing2']),
];

console.log(clients)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)

let sortClients = clients.sort((a, b) => a.order.length - b.order.length);

console.log(sortClients)
