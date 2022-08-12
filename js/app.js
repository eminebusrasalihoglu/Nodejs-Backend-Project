const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', '../views')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));

const mainrouter = require('../routes/main');
app.use(mainrouter);
const cardrouter = require('../routes/card');
app.use(cardrouter);
const listrouter = require('../routes/list');
app.use(listrouter);
const addrouter = require('../routes/add');
app.use(addrouter);
const detailCardrouter = require('../routes/detail');
app.use(detailCardrouter);
const editCardrouter = require('../routes/editCard');
app.use(editCardrouter);
const notfoundrouter = require('../routes/404');
app.use(notfoundrouter);

const mongoConnect = require('../db');

mongoConnect((client) => {
    app.listen(3000);
    console.log(client);
})


app.get('/', (req, res, next) => {
    res.render('main.pug');
});
//app.listen(3000, () => {
//  console.log("listening on port 3000");
//});