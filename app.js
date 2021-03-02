const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js')


app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));




app.get('/', async (req, res) => {

    let r = await routes.get(req.url)

    res.send(r)

})







app.listen(3000, () =>{
	console.log('Servidor rodando em: http://localhost:3000')
})