//On importe le module express
import express from 'express';

//On import le module jwt token
import jwt from 'jsonwebtoken';

//Définition du Router
let router = express.Router();

//Tableau qui contiendra les users
let users = [];

router.get('/api', (req,res) => {
	res.send('Test message');
});



router.post('/api/posts', verifyToken, (req, res) => {  
  	// verify a token symmetric - synchronous
	var decoded = jwt.verify(token, 'shhhhh');
	console.log(decoded.foo) // bar
	});

router.post('/signup',(req,res) => {
	let user = req.body;

	if(user.username && user.password){
		var verifyUser = users.find(function(element){
			return element.username == user.username;
		})
		if(verifyUser){
			res.send("user déjà add");
		}
		else{
			users.push(user);
			res.status(200).send("User ajouté");
		}
	} 
	else{
		res.send("Username ou password incorrect");
	} 
});



router.post('/login',(req,res) =>{

	if(req.body.username && req.body.password) {
			// sign with default (HMAC SHA256)
			var jwt = require('jsonwebtoken');
			var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
			//backdate a jwt 30 seconds
			var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) +( 60 * 60) }, 'shhhhh');

            console.log("Ceci est le token " +token);
			
		 res.send("Bienvenue cher utilisateur");


	} else {

		 res.send("Qui etes vous !?");
	}

	

})


router.get('/',(req,res) => {
   res.send(users);

});

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

//export du module router
export default router;