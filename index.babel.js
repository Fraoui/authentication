//On récupère le module "babel-register"
require('babel-register')({
    presets: ['es2015']
});
//On récupère index.js
require('./index');