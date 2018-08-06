import React, { Component } from 'react';

class Basket extends Component {
    render() {
        if (this.props.items.length) {
            return (
                <div>
                    {
                        this.props.items.map(item =>
                            <div>
                                <p>{item.name}</p>
                            </div>
                        )
                    }
                </div>
            );
        }
        else {
            return <div>Basket is empty</div>
        }

    }
}

export default Basket;
