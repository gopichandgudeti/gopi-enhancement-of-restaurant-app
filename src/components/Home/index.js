import {Component} from 'react'
import MenuTab from '../MenuTab'
import Dish from '../Dish'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failue: 'FAILURE',
}

class Home extends Component {
  state = {
    total: [],
    displaydata: [],
    apiStatus: apiStatusConstants.initial,
    activeTabId: '11',
  }

  componentDidMount() {
    this.getMenuCard()
  }

  getMenuCard = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'

    const response = await fetch(apiUrl)
    const data = await response.json()
    const array = data.map(each => ({
      tableMenuList: each.table_menu_list,
      restaurentName: each.restaurant_name,
    }))

    const totalDetails = array[0]
    const {tableMenuList, restaurentName} = totalDetails

    const format = tableMenuList.map(each => ({
      categoryDishes: each.category_dishes.map(eachCategory => ({
        dishId: eachCategory.dish_id,
        dishName: eachCategory.dish_name,
        dishPrice: eachCategory.dish_price,
        dishImage: eachCategory.dish_image,
        dishCurrency: eachCategory.dish_currency,
        dishCalories: eachCategory.dish_calories,
        dishDescription: eachCategory.dish_description,
        dishAvailability: eachCategory.dish_Availability,
        dishType: eachCategory.dish_type,
        nexturl: eachCategory.nexturl,
        addonCat: eachCategory.addonCat,
      })),
      menuCategory: each.menu_category,
      menuCategoryId: each.menu_category_id,
      menuCategoryImage: each.menu_category_image,
      nexturl: each.nexturl,
    }))

    this.setState({total: format})
    const single = format[0]
    const {categoryDishes} = single
    this.setState({displaydata: categoryDishes})

    /*const updatedData3 = updatedData2.tableMenuList.map(eachType => ({
      menuCategory: eachType.menu_category,
      menuCategoryId: eachType.menu_category_id,
      menuCategoryImage: eachType.menu_category_image,
      nexturl: eachType.nexturl,
      categoryDishes: eachType.category_dishes.map(eachCategory => ({
        dishId: eachCategory.dish_id,
        dishName: eachCategory.dish_name,
        dishPrice: eachCategory.dish_price,
        dishImage: eachCategory.dish_image,
        dishCurrency: eachCategory.dish_currency,
        dishCalories: eachCategory.dish_calories,
        dishDescription: eachCategory.dish_description,
        dishAvailability: eachCategory.dish_availability,
        dishType: eachCategory.dish_type,
        nexturl: eachCategory.nexturl,
        addonCat: eachCategory.addonCat.map(eachAddonCategory => ({
          addonCategory: eachAddonCategory.addon_category,
          addonCategoryId: eachAddonCategory.addon_category_id,
          addonSelection: eachAddonCategory.addon_selection,
          nexturl: eachAddonCategory.nexturl,
          addons: eachAddonCategory.addons.map(eachAddon => ({
            dishId: eachAddon.dish_id,
            dishName: eachAddon.dish_name,
            dishPrice: eachAddon.dish_price,
            dishImage: eachAddon.dish_image,
            dishCurrency: eachAddon.dish_currency,
            dishCalories: eachAddon.dish_calories,
            dishDescription: eachAddon.dish_description,
            dishAvailability: eachAddon.dish_availability,
            dishType: eachAddon.dish_type,
          })),
        })),
      })),
    })) */
  }

  onChangeTab = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {displaydata, apiStatus, total, activeTabId} = this.state
    const filteredMenuCardList = total.filter(
      eachCategory => eachCategory.menuCategoryId === activeTabId,
    )

    /*const single = filteredMenuCardList[0]
    const {categoryDishes} = single
    console.log(categoryDishes)*/

    return (
      <div className="app-bg-container">
        <ul className="tab-container">
          {total.map(eachType => (
            <MenuTab
              menuData={eachType}
              key={eachType.menuCategoryId}
              onChangeTab={this.onChangeTab}
              isActive={eachType.menuCategoryId === activeTabId}
            />
          ))}
        </ul>
        <ul className="items-list">
          {displaydata.map(eachDish => (
            <Dish dishData={eachDish} key={eachDish.dishId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
