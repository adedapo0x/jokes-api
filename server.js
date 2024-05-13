const http = require('http')

// db database resource (array of objects)
let db = [
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
    // Handling GET request
    if (req.url === '/' && req.method === 'GET'){
        res.writeHead(200)
        res.end(JSON.stringify({"data": db, "message": "Data fetched successfully"}))
    } 
    // Handling POST requests
    else if (req.url === '/' && req.method === 'POST'){
        const body = []
        req.on("data", (chunk) =>{
            body.push(chunk)
        })
        req.on('end', ()=>{
            const additionalJoke = JSON.parse(Buffer.concat(body).toString())
            db.push(additionalJoke)
            res.end(JSON.stringify(db))
        })
    } 
    // Handling PATCH requests
    else if (req.url === '/jokes/1' && req.method === 'PATCH'){
        const id = +req.url.split('/')[2]
        const body = []
        req.on("data", (chunk) =>{
            body.push(chunk)
        })
        req.on('end', ()=>{
            const updateResponse = JSON.parse(Buffer.concat(body).toString())
            const updatedDb = db.map((item) =>{
                if (item.id === id){
                    return resJokes = {
                        ... item,
                        ...updateResponse
                    }
                }
                return item
            })
            db = updatedDb;
            res.end(JSON.stringify(resJokes))
        })
    } 
    // Handling DELETE requests
    else if (req.url === '/jokes/1' && req.method === 'DELETE'){
        const id = +req.url.split('/')[2]
        const newDb = db.filter(item => item.id !== id) // creates a new database for client
        const delJoke = db.filter(item => item.id === id) // gets the deleted joke
        res.end(JSON.stringify(delJoke))        
    }
    else {
        res.writeHead(404)
        res.end(JSON.stringify({"error": "true", "message": "Error encountered!"}))
    }
})

server.listen(3000, () => console.log('Server running perfectly!'))

