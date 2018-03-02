//On récupère le module express
import express from 'express';

//On récupère le module jwt token authentication
import jsonwebtoken from 'jsonwebtoken';
//
import * as bodyParser from 'body-parser';

//On récupère le module users/route
import router from "./users/route";

//Déclaration de l'application
let app = express();

//l'app utilisera body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

app.use('/users',router);

//On se connect au port 8077
app.listen('8077',() => {
	console.log('Connecter au port 8077');
});


