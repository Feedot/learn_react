import React, { Component } from 'react';


class Products extends Component {
    render() {
        return (
            <div>
                {this.props.items.map((item) => {
                    return (
                        <div>
                            <p>{item.name} </p>
                            <button onClick={() => this.props.add(item)}>Add</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Products;
