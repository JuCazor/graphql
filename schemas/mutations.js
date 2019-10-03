const graphql = require("graphql");
const db = require("../pgAdaptor").db;
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const { ProductType } = require("./types");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO product( name, description) VALUES ( '${args.name}', '${args.description}') RETURNING name,description `;
        return db.one(query)
               .then(data => {
                  return data;
               })
               .catch(err => {
                  return 'The error is', err;
               });
      }
    },
    updateProduct: {
        type: ProductType,
        args: {
          name: { type: GraphQLString },
          description: { type: GraphQLString },
          id: { type: GraphQLID}
        },
        resolve(parentValue, args) {
          const query = `UPDATE product SET name='${args.name}', description='${args.description}' WHERE id=${args.id} RETURNING name,description  `;
          return db.one(query)
                 .then(data => {
                    return data;
                 })
                 .catch(err => {
                    return 'The error is', err;
                 });
        }
      },
      deleteProduct: {
        type: ProductType,
        args: {
          id: { type: GraphQLID}
        },
        resolve(parentValue, args) {
          const query = `DELETE FROM product WHERE id=${args.id} RETURNING name,description  `;
          return db.one(query)
                 .then(data => {
                    return data;
                 })
                 .catch(err => {
                    return 'The error is', err;
                 });
        }
      },
      products: {
        type: ProductType,
        args: { },
        resolve(parentValue, args) {
          const query = `SELECT * FROM product`;
          const values = args;
  
          return db.one(query)
               .then(data => {
                  return [data];
               })
               .catch(err => {
                  return 'The error is', err;
               });
        }
      }
  }
});

exports.mutation = RootMutation;


/*
    updateProduct: {
        type: ProductType,
        args: {
          id: {type: GraphQLID },
          name: { type: GraphQLString },
          description: { type: GraphQLString }
        },
        resolve(parentValue, args) {
          const query = `UPDATE product SET name=${args.name}, description= ${args.description} WHERE id = ${args.name} RETURNING name, description`;
          const values = [
            args.creatorId,
            new Date(),
            args.title,
            args.description
          ];
  
          return db
            .one(query, values)
            .then(res => res)
            .catch(err => err);
        }
      }
  }
});

exports.mutation = RootMutation;

*/