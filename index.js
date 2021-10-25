const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world second node expreess with node mons s s ssssssssssss aaa')
});

const users = [
    { id: 1, name: 'Jhankar', email: 'jhankar.gmail.com' },
    { id: 2, name: 'Shakira', email: 'shakira.gmail.com', phone: 020202020 },
    { id: 3, name: 'Aania', email: 'arnika.gmail.com', phone: 02020245020 },
    { id: 4, name: 'Arnika', email: 'ania.gmail.com', phone: 02020452020 },
    { id: 5, name: 'Solaiman', email: 'solaiman.gmail.com', phone: 02024502020 },
    { id: 6, name: 'Shelimuddin', email: 'selimuddin.gmail.com', phone: 02024502020 },

]

const fruits = [
    { name: 'Banana', price: 20, quantity: 4 },
    { name: 'Manoge', price: 70, quantity: 4 },
    { name: 'Apple', price: 120, quantity: 4 },
    { name: 'Red Cherry', price: 40, quantity: 4 },
    { name: 'Amloki', price: 20, quantity: 4 },
    { name: 'Banana', price: 20, quantity: 4 },
]

// use query parameter for search
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
    res.send(users)
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('Your post is done', req.body);
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('ymmy ymm tok marka misty')
})

app.listen(port, () => {
    console.log('this is node second ', port)
})