import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'

import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

// write your code here

class App extends Component {
  state = {
    cartList: [],
  }

  addCartItem = (dish, itemQuantity) => {
    const {cartList} = this.state
    const isAlreadyExists = cartList.find(item => item.dishId === dish.dishId)
    if (!isAlreadyExists) {
      const newDish = {...dish, quantity: itemQuantity}
      this.setState(prev => ({cartList: [...prev.cartList, newDish]}))
    } else {
      this.setState(prev => ({
        cartList: prev.cartList.map(item =>
          item.dishId === dish.dishId
            ? {...item, quantity: item.quantity + itemQuantity}
            : item,
        ),
      }))
    }
  }

  removeCartItem = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(eachItem => eachItem.dishId !== id),
    }))
  }

  incrementCartItemQuantity = dish => {
    const {cartList} = this.state
    const isAlreadyExists = cartList.find(item => item.dishId === dish.dishId)
    if (!isAlreadyExists) {
      const newDish = {...dish, quantity: 1}
      this.setState(prev => ({cartList: [...prev.cartList, newDish]}))
    } else {
      this.setState(prev => ({
        cartList: prev.cartList.map(item =>
          item.dishId === dish.dishId
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      }))
    }
  }

  decrementCartItemQuantity = dish => {
    const {cartList} = this.state
    const isAlreadyExists = cartList.find(item => item.dishId === dish.dishId)
    if (isAlreadyExists) {
      this.setState(prev => ({
        cartList: prev.cartList
          .map(item =>
            item.dishId === dish.dishId
              ? {...item, quantity: item.quantity - 1}
              : item,
          )
          .filter(item => item.quantity > 0),
      }))
    }
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          removeAllCartItems: this.removeAllCartItems,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/Cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    )
  }
}
export default App
