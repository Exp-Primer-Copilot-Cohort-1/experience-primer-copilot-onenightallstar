// Create web server


    const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Use cookieParser
app.use(cookieParser('1234'));

// Use bodyParser
app.use(bodyParser.urlencoded({extended: false}));

// Set view engine
app.set('view engine', 'pug');

// Set static directory
app.use(express.static('public'));

// Import module
const main = require('./routes/main');
const login = require('./routes/login');
const logout = require('./routes/logout');
const signup = require('./routes/signup');
const write = require('./routes/write');
const view = require('./routes/view');
const modify = require('./routes/modify');
const remove = require('./routes/remove');
const search = require('./routes/search');
const comment = require('./routes/comment');
const commentRemove = require('./routes/commentRemove');
const commentModify = require('./routes/commentModify');

// Setting router
app.use('/', main);
app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/write', write);
app.use('/view', view);
app.use('/modify', modify);
app.use('/remove', remove);
app.use('/search', search);
app.use('/comment', comment);
app.use('/commentRemove', commentRemove);
app.use('/commentModify', commentModify);

// Error handler
app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});

// Run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});
