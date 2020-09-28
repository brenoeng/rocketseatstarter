const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Helloasasasasf')
})

app.listen(3001)

