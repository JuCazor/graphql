"use strict";
const graphql = require("graphql");
const express = require("express");
const expressGraphQl = require("express-graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./schemas/queris");
const { mutation } = require("./schemas/mutations");

const schema = new GraphQLSchema({
  query,
  mutation
});

var app = express();
app.use(
  '/',
  expressGraphQl({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000);

console.log("Running a GraphQL API server at localhost:4000/graphql");

/*

var express = require("express");
var app = express();

var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");
var cors = require("cors");

const resolvers = require('./resolvers')
const models = require('../models')

var { getProducts, addProduct } = require("./data/products");

var schema = buildSchema(`
    type Product {
        description: String,
        name: String,
        id: Int
    },
    type Query {
        hello: String,
        products: [Product],
        product(id: Int!): Product,
        update(id: Int!): Product
    },
    type Mutation {
        createProduct(name:String!,description: String!):Product
        
    }
`);

/*
    updateProduct(id: Int!, input: MessageInput): Message
*/
/*
var root = {
    hello: () => {
        return "Hello world";
    },
    products: () => {
        return getProducts();
    },
    product: ({ id }) => {
        const products = getProducts();
        return products.find( p => p.id == id );
    },
    createProduct: args => {
        const { name, description } = args;
        return addProduct(name, description);
    },
    update: ({id }) => {
        const {id, name, description} = args;
        const products = getProducts();
        const product = products.find(p => p.id == id);
        return product
    },
    updateProduct: args => {
        const {id, description} = args;
        const products = getProducts();
        const product = products.find(p => p.id == id);
        if (product == null) {
            throw new Error('no product exists with id ' + id);
        }
    }
};

app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
)

app.listen(4000);

console.log("Running a GraphQL API server at localhost:4000/graphql");

*/


 /*
    //config.json

    {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}




    */