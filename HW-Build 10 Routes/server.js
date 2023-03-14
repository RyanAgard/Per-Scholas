const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our fruit data from models folder
// const view = require('./view/index')

const userRoute1 = require('./Routes/User1')
const userRoute2 = require('./Routes/User2')
const userRoute3 = require('./Routes/User3')
const userRoute4 = require('./Routes/User4')
const userRoute5 = require('./Routes/User5')
const userRoute6 = require('./Routes/User6')
const userRoute7 = require('./Routes/User7')
const userRoute8 = require('./Routes/User8')
const userRoute9 = require('./Routes/User9')
const userRoute10 = require('./Routes/User10')
// Load our fruit routes


// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')


// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// Connect our routes to our express app
app.use('/User1',userRoute1)
app.use('/User2',userRoute2)
app.use('/User3',userRoute3)
app.use('/User4',userRoute4)
app.use('/User5',userRoute5)
app.use('/User6',userRoute6)
app.use('/User7',userRoute7)
app.use('/User8',userRoute8)
app.use('/User9',userRoute9)
app.use('/User10',userRoute10)
// Our "root" route for our app 
// app.get('/', (req, res) => {
//     res.send('<p Bottles of beer on the wall </p> ' )
// })
// // Setup an "index" route for vegetables
// app.get('/route1', (req, res) => {
//     res.send()
// })
// app.get('/route2', (req, res) => {
//     res.send(view)
// })
// app.get('/route3', (req, res) => {
//     res.send(view)
// })
// app.get('/route4', (req, res) => {
//     res.send(view)
// })
// app.get('/route5', (req, res) => {
//     res.send(view)
// })
// app.get('/route6', (req, res) => {
//     res.send(view)
// })

// // Setup a "show" route for vegetables
// app.get('/vegetables/:index', (req, res) => {
//     res.send(vegetables[req.params.index])
// })

// // Setup an "index" route for meats
// app.get('/meats', (req, res) => {
//     res.send(meats)
// })

// // Setup a "show" route for fruits
// app.get('/meats/:index', (req, res) => {
//     res.send(meats[req.params.index])
// })

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})