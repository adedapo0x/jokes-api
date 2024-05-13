const http = require('http')

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
    if (req.url === '/' && req.method === 'GET'){
        res.writeHead(200)
        res.end(JSON.stringify({"data": db, "message": "Data fetched successfully"}))
    } else if (req.url === '/jokes/1' && req.method === 'PATCH'){
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
            console.log(db)
            res.end(JSON.stringify(resJokes))
        })
    } else {
        res.writeHead(404)
        res.end(JSON.stringify({"error": "true", "message": "Error encountered!"}))
    }
})

server.listen(3000, () => console.log('Server running perfectly!'))

