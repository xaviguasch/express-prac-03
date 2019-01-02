const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily']


app.get('/', function(req, res) {
    res.render('home')
})

app.get('/friends', function(req, res) {
    res.render('friends', {friends: friends})
})

app.post('/addfriend', function(req, res) {
    const newFriend = req.body.newfriend

    friends.push(newFriend)
    
    res.redirect('friends')
})



app.listen(3000, 'localhost', function() {
    console.log('server has started, listening on port 3000, frendo!!!');
})