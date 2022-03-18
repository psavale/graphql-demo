const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb://ninja:test@ds161148.mlab.com:61148/graphql-ninja')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind the express with graphQL
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen('5000', ()=>{
	console.log('listening on 5000 port');
});