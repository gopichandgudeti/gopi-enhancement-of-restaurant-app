import {useContext} from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = ({cartItemDetails}) => {
  const {dishId, dishName, dishPrice, dishImage, quantity} = cartItemDetails
  const {
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
  } = useContext(CartContext)

  const itemPrice = dishPrice * quantity

  const onIncrease = () => incrementCartItemQuantity(cartItemDetails)

  const onDecrease = () => decrementCartItemQuantity(cartItemDetails)

  const onClickRemoveItem = () => removeCartItem(dishId)

  return (
    <li className="cart-item-container">
      <img className="dish-image" src={dishImage} alt={dishName} />
      <div>
        <p>{dishName}</p>
        <p>{itemPrice}</p>
      </div>
      <div className="btn-container">
        <button type="button" className="incre-decre-btns" onClick={onDecrease}>
          -
        </button>
        <p>{quantity}</p>
        <button type="button" className="incre-decre-btns" onClick={onIncrease}>
          +
        </button>
      </div>
      <button
        type="button"
        className="text-danger align-self-center"
        onClick={onClickRemoveItem}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default CartItem
