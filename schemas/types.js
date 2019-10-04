const graphql = require("graphql");
const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const ProductType = new GraphQLObjectType({
  name: "product",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

const ProductsType = new GraphQLObjectType({
  name: "products",
  type: "Query",
  fields: () => ({ 
    product: {
      type: new GraphQLList(ProductType),
      resolve(parent) { //parent, arguments, context, info
        return db.many(
          'SELECT id,name,description FROM product'
        )
      }
    }
  })
});

/*

const ProductsType = new GraphQLObjectType({
  name: "products",
  type: "Query",
  fields: {
    product: new GraphQLList(ProductType),
    resolve(parent) { //parent, arguments, context, info
      return db.any(
        'SELECT * FROM product '
      )
    }
  }
});

*/

exports.ProductType = ProductType;
exports.ProductsType = ProductsType;