import React from 'react';

class Product extends React.Component {
    render() { 
        return (
            <div className="product">
                <p>{this.props.product.name}</p>
            </div>
        );
    }
}
 
export default Product;