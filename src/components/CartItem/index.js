import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value
      const {data} = props
      const {dishId, dishName, dishPrice, dishImage, quantity} = data

      const itemPrice = dishPrice * quantity

      const onIncrease = () => {
        incrementCartItemQuantity(data)
      }

      const onDecrease = () => {
        decrementCartItemQuantity(data)
      }

      const onClickRemoveItem = () => {
        removeCartItem(dishId)
      }

      return (
        <li className="cart-item-container">
          <img src={dishImage} alt={dishName} className="dish-image" />
          <div>
            <p>{dishName}</p>
            <p>{itemPrice}</p>
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="incre-decre-btns"
              onClick={onDecrease}
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              type="button"
              className="incre-decre-btns"
              onClick={onIncrease}
            >
              +
            </button>
          </div>
          <button type="button" onClick={onClickRemoveItem}>
            Remove
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
