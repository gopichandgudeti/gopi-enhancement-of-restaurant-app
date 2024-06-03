import './index.css'

const Dish = props => {
  const {dishData, onAddToCart, onRemoveFromCart, cartItems} = props

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

  const onIncrease = () => {
    onAddToCart(dishData)
  }

  const onDecrease = () => {
    onRemoveFromCart(dishData)
  }

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
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
            <div className="btn-container">
              <button
                type="button"
                className="incre-decre-btns"
                key={dishId}
                onClick={onDecrease}
              >
                -
              </button>
              <p>{getQuantity()}</p>
              <button
                type="button"
                className="incre-decre-btns"
                key={dishId}
                onClick={onIncrease}
              >
                +
              </button>
            </div>
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
