import Header from '../Header'
import CartItem from '../CartItem'

import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      const renderEmptyCartView = () => (
        <div className='m-auto d-flex flex-column align-center'>
          <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png' />
          <p>Your cart is Empty.</p>
        </div>
      )

      const renderCartItems = () => (
        <>
          <div className='cart-items-header d-flex align-items-center justify-content-between'>
            <h1>Cart Items</h1>
            <button type='button' onClick={onClickRemoveAll}>
              Remove All
            </button>
          </div>
          <ul className='cart-item-container'>
            {cartList.map(each => (
              <CartItem data={each} key={each.dishId} />
            ))}
          </ul>
        </>
      )

      return (
        <div className='app-bg-container'>
          <Header />
          <div className='cart-body-container d-flex flex-column'>
            {cartList.length === 0 ? renderEmptyCartView() : renderCartItems()}
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
