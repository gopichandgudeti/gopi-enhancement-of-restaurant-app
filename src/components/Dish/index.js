import './index.css'

const Dish = props => {
  const {dishData} = props

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

  /*const {addonCategory, addonCategoryId, addonSelection, nexturl, addons} =
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

  console.log({dishAvailability})

  return (
    <li className="dish-item">
      <div className="dish-details-container">
        <img src={nexturl} className="next-img" />
        <div className="dish-description-container">
          <h1 className="dish-name">{dishName}</h1>
          <p className="dish-currency-price">
            {dishCurrency} {dishPrice}
          </p>
          <p className="dish-discription">{dishDescription}</p>
          {{dishAvailability} && (
            <div className="btn-container">
              <button className="incre-decre-btns">-</button>
              <p>0</p>
              <button className="incre-decre-btns">+</button>
            </div>
          )}
          {{dishAvailability} === false && (
            <p className="not-available-text">Not available</p>
          )}

          {{dishAvailability} && addonCat.length !== 0 && (
            <p>Customizations available</p>
          )}
        </div>
      </div>
      <p className="dish-calories">{dishCalories} calories</p>
      <img src={dishImage} alt="dish" className="dish-image" />
    </li>
  )
}

export default Dish
