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
      const {
        dishId,
        dishName,
        dishPrice,
        dishImage,
        dishCurrency,
        dishCalories,
        dishDescription,
        dishAvailability,
        dishType,
        nexturl,
        addonCat,
        quantity,
      } = data

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
          <h1>{dishName}</h1>
          <p>
            {dishPrice}*{quantity}
          </p>
          <div className="btn-container">
            <button
              type="button"
              className="incre-decre-btns"
              key={dishId}
              onClick={onDecrease}
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              type="button"
              className="incre-decre-btns"
              key={dishId}
              onClick={onIncrease}
            >
              +
            </button>
          </div>
          <button type="button" onClick={onClickRemoveItem}>
            Remeve
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
