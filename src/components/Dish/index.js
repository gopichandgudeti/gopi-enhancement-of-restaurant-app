import {Component} from 'react'
import CartContext from '../../context/CartContext'

import './index.css'

class Dish extends Component {
  state = {
    itemQuantity: 0,
  }

  onIncrease = () => {
    this.setState(prevState => ({itemQuantity: prevState.itemQuantity + 1}))
  }

  onDecrease = () => {
    const {itemQuantity} = this.state
    if (itemQuantity > 1) {
      this.setState(prevState => ({itemQuantity: prevState.itemQuantity - 1}))
    }
  }

  render() {
    const {itemQuantity} = this.state
    const {dishData} = this.props

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
    } = dishData

    console.log({dishAvailability})

    /* const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  } */

    return (
      <CartContext.Consumer>
        {value => {
          const {addCarItem} = value

          const onAddToCart = () => {
            addCarItem(dishData, itemQuantity)
          }

          return (
            <li className="dish-item">
              <div className="dish-details-container">
                <img src={nexturl} className="next-img" alt="nxt" />
                <div className="dish-description-container">
                  <h1 className="dish-name">{dishName}</h1>
                  <p className="dish-price">
                    {dishCurrency} {dishPrice}
                  </p>
                  <p className="dish-discription">{dishDescription}</p>
                  {dishAvailability && (
                    <>
                      <div className="btn-container">
                        <button
                          type="button"
                          className="incre-decre-btns"
                          key={dishId}
                          onClick={this.onDecrease}
                        >
                          -
                        </button>
                        <p>{itemQuantity}</p>
                        <button
                          type="button"
                          className="incre-decre-btns"
                          key={dishId}
                          onClick={this.onIncrease}
                        >
                          +
                        </button>
                      </div>
                      {itemQuantity >= 1 && (
                        <button type="button" onClick={onAddToCart}>
                          Add to cart
                        </button>
                      )}
                    </>
                  )}
                  {dishAvailability === false && (
                    <p className="not-available-text">Not available</p>
                  )}

                  {dishAvailability && addonCat.length !== 0 && (
                    <p className="text">Customizations available</p>
                  )}
                </div>
              </div>
              <p className="dish-calories">{dishCalories} calories</p>
              <img src={dishImage} alt="dish" className="dish-image" />
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
  /* const {addonCategory, addonCategoryId, addonSelection, nexturl, addons} =
    addonCat
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
  } = addons */
}

export default Dish
