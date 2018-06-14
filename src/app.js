import express from "express";
import graphqlHTTP from 'express-graphql';
import schema from './schema'
import mongoose from 'mongoose';

const app = express();
const port = 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/gql_db')
    .then(() => console.log('database connnected successfully'))
    .catch((error) => console.log('problem connected to db', error))

// const schema = {};

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.get('/', (req, res) => {
    return res.json({
        msg: 'hello graphql'
    })
})

app.listen(port, () => console.log(`Server running at port ${port}`))