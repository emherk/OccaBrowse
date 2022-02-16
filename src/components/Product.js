import React from 'react';

class Product extends React.Component {
    render() { 
        console.log(`rendering product ${this.props.product}`)
        return (
            <div className="product">
                <p>{this.props.product.name}</p>
            </div>
        );
    }
}
 
export default Product;