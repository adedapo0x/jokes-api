const http = require('http')

// 2084 

const db = [
    {
        'title': 'What did the mic tell the user? Stop spitting on me',
        'comedian': 'John Doe',
        'year': 1994,
        'id': 1
    },
    {
        'title': 'Why is it called fried rice when it is not fried with the pan?',
        'comedian': 'Erik Ten Hang',
        'year': 1849,
        'id': 2
    },
    {
        'title': 'Some code like they dress',
        'comedian': 'Noyes',
        'year': 2000,
        'id': 3
    },
    {
        'title': 'After cooking for four months it was a Spaghetti code',
        'comedian': 'Starlie Chambers',
        'year': 2002,
        'id': 4
    }
]

const server = http.createServer((req, res) => {
    

})

server.listen(3000, () => console.log('Server running perfectly!'))
