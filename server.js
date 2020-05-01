const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const expressGraphQL = require('express-graphql'); //graphql 


const schema = require('./controllers/schema/schema');

//initialize express server
const app = express();



const PORT = process.env.PORT || 5000;

//reads the .env file
require("dotenv").config()


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//configure localhost:5000/graphql
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));



//connect to mongodb 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((() => console.log("DB connected"))).catch(err => console.error(err))

// Add routes, both API and view
//app.use(routes);


// Serve files from the public folder
app.use(express.static(path.resolve(__dirname, 'client/build')));


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
