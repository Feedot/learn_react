import React, { Component } from 'react';
import Products from '../Products/index';
import Basket from '../Basket/index'
import {Input, Button} from 'semantic-ui-react'
import {fetching} from '../../api/index'

import styles from './styles.css'

class Auth extends Component {
    // 1. Инициализация стейта
    state = {
        basket: [],
        products: [{name: 'Bread'}, {name: 'Solt'},{name: 'Water'},{name: 'Cola'}]
    }
    addItem = (obj) => {
        const basket = this.state.basket
        console.log(obj)
        const newBasket = basket.push(obj)
        console.log(newBasket)
        this.setState({basket: newBasket})
    }
    // 2 выполняется функция до отрисовки рендера
    componentWillMount(){
        if (this.state.basket.length) {
            console.log('Basket has some items')
        }
        else {
            console.log('Basket is Empty')
        }
    }
    // 3. Отрисовка компонента
    render() {
        return (
            <div>
                <Products
                    add={this.addItem}
                    items={this.state.products}
                />
                <Basket items={this.state.basket}/>
            </div>
        );
    }
    // 3. Сразу после отрисовки компонента
    componentDidMount() {
        console.log('Component was mounted')
    }
    // Перед получением новых пропсов
    componentWillReceiveProps(nextStae){

    }
    // После изменения стейта перед перересовкой компонента
    componentWillUpdate() {

    }
    // После изменения стейта после перерисовки компонента
    сomponentDidUpdate() {

    }

}

export default Auth;
