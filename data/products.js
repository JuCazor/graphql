let products = [
    {
        id: 1,
        name: "coca cola",
        description: "Es rica pero cara"
    },
    {
        id: 2,
        name: "tonicol",
        description: "Es refresco de vainilla"
    },
    {
        id: 3,
        name: "tonayan",
        description: "Aplica en todos lados"
    }
];

const addProduct = (name,description) => {
    const id = products[products.length - 1].id + 1;
    const newProduct = { id, name, description };
    products = [...products, newProduct];
    return { ...newProduct };
};

const getProducts = () => {
    return products;
};

const updateProduct = (id, description) => {
    
    return {...productUpdated}
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct
};


/*
query Query($id:Int!){
	product(id:$id){
  	name
  }
}
mutation MyMutation {
  createProduct(name: "Red label",description:"description"){
    name
  }
}


*/