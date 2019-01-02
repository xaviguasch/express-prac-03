const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('home')
})

app.get('/friends', function(req, res) {
    const friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily']
    res.render('friends', {friends: friends})
})

app.post('/addfriend', function(req, res) {
    res.send('YOU HAVE REACHED THE POST ROUTE!!!')
})



app.listen(3000, 'localhost', function() {
    console.log('server has started, listening on port 3000, frendo!!!');
})