const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const ProductType = new GraphQLObjectType({
  name: "product",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

exports.ProductType = ProductType;