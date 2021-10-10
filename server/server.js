//-----DECLATATIONS-----//
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

//-----MIDDLEWARE-----//
//Parse incoming string or array
app.use(express.urlencoded({extended: true}));
//Parse incoming Json data
app.use(express.json());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log('NOW LISTENING'));
});