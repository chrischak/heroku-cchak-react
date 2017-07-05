import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
  super();
    this.state = {
      cartTotal: 0,
      cartProduct:[],
      product:[
        {
        name:"Clothes #001",
        price: 36.99,
        amount:1,
        },
        {
        name:"Clothes #002",
        price: 25.99,
        amount:1,
        },
      ],
    };
  }

  addProduct(product){
    const cartTotal = this.state.cartTotal;
    const newCartTotal = Math.round((cartTotal + product.price + 0.00001) * 100 ) / 100;
    const cartProduct = this.state.cartProduct;
    let existingEntry;
    for (var i = 0; i < cartProduct.length; i++){
      if (cartProduct[i].name === product.name){
        existingEntry = cartProduct[i];
        break;
      }
    }
    if (existingEntry) {
      existingEntry.amount += 1;
    }else {
      cartProduct.unshift(product);
    }
    this.setState({
      cartTotal:newCartTotal,
      cartProduct:cartProduct,
    })
  }

  render() {
    const productSizes = ["XS","S", "M", "L", "XL"];
    const product = this.state.product;
    const cartProduct = this.state.cartProduct;
    return (
      <div className="shopping-cart">
        <h3>Shopping Cart</h3>
        <div key="cart-product">
          {cartProduct.map((product) =>
            <div>
              <h3>{product.name}</h3>
              <h3>{product.amount}</h3>
              <h3>{product.price}</h3>
            </div>
          )}
        </div>
        Total:$ {this.state.cartTotal}
        <br/>
        <h2> Product </h2>
          {product.map((product) =>
          <div key={product.name}>
            <h3>{product.name}</h3>
            <h3>$ {product.price}</h3>
            <button onClick={() => this.addProduct(product)}>ADD</button>
          </div>
          )}
        <h3> Select Size </h3>
        <li>
          {productSizes.map((productSizes) =>
            <ul key={productSizes}>
              <button>{productSizes}</button>
            </ul>
          )}
        </li>
        <br/>
      </div>
    );
  }
}

export default ShoppingCart;
