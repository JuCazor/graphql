const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { ProductType } = require("./types");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
      product: {
        type: ProductType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, args) {
          const query = `SELECT * FROM product WHERE id=${args.id}`;
          const values = [args.id];
          return db
            .one(query, values)
            .then(res => res)
            .catch(err => err);
        }
      },
      products: {
        type: ProductType,
        args: { },
        async resolve(parentValue, args) {
          const query = `SELECT * FROM product`;
          const values = args;
          getProducts();
          
          return getProducts();
        }
      }
    }
  });

  async function getProducts(){
    const query = `SELECT * FROM product`;
    const data = await db.any(query);
    return data;
  }
  
  exports.query = RootQuery;