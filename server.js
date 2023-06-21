const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// connect to db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'teskominfo'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()