import CartContext from '../../context/CartContext'
import Header from '../Header'
import CartItem from '../CartItem'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      return (
        <div className="app-bg-container">
          <Header />
          {cartList.length === 0 ? (
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" />
          ) : (
            <div>
              <button type="button" onClick={onClickRemoveAll}>
                Remove all
              </button>
              <ul className="cart-item-container">
                {cartList.map(each => (
                  <CartItem data={each} key={each.dishId} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
