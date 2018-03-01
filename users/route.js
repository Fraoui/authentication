//On importe le module express
import express from 'express';



//Définition du Router
let router = express.Router();

//Tableau qui contiendra les users
let users = [];


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


router.post('/login', (req,res) =>{
	let user = req.body;
	if(user.username && user.password){
		var verifyUser = users.find(function(element){
			return element.username == user.username && element.password == user.password;
		})
		if(verifyUser){
			res.send("log");
		}
		else{
			res.send("Username ou password incorrect");
		}
	}
	else{
		res.send("Username ou password incorrect");
	}

})

router.get('/',(req,res) => {
   res.send(users);
});

//export du module router
export default router;