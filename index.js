const express = require('express');
const router = express.Router();
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

/*app.get('/', (req, res) => {
   res.render('index', {data: "Pardon Me"});
});*/

router.get('/', (req, res) => {
   res.render('index', {data:"Pardon Me"});
})

router.get('/contact', (req, res) => {
   res.render('contact');
});

app.use(router);

app.listen(8080, () => console.log("started ap on 8080"));
