const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret : '3254YTgfvhgDESXH@#$',
    resave : false,
    saveUninitialized : false,
    cookie : { maxAge : 6000 }
}));

app.get('/', (req, res) => {
    if(req.session.username){
        res.send(`Welcome back, ${req.session.username}! <a href='/logout'>Logout</a>`);
    }
    else{
        res.send(`<form method="POST" action="/login">
                    <input type="text" name="username" />
                    <button type="submit">Login</button>
                    </form>`);
    }
});

app.post('/login', (req, res) => {
    const { username } = req.body;
    req.session.username = username;
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        else res.redirect("/");
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})