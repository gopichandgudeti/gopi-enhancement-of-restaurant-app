import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MenuTab from '../MenuTab'
import Dish from '../Dish'
import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    total: [],
    apiStatus: apiStatusConstants.initial,
    activeTabId: '',
    name: '',
  }

  componentDidMount() {
    this.getMenuCard()
  }

  getMenuCard = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl =
      'https://run.mocky.io/v3/72562bef-1d10-4cf5-bd26-8b0c53460a8e'

    const response = await fetch(apiUrl)
    if (response.ok) {
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

      // this.setState({total: format})
      // const single = format[0]
      // const {categoryDishes} = single
      this.setState({
        apiStatus: apiStatusConstants.success,
        // displaydata: categoryDishes,
        total: format,
        activeTabId: format[0].menuCategoryId,
        name: restaurentName,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }

    /* const updatedData3 = updatedData2.tableMenuList.map(eachType => ({
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

  renderLoadingView = () => (
    <div className="loader-container" data-testId="loader">
      <Loader type="ThreeDots" color="ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <p>Not Found</p>

  renderSuccessView = () => {
    const {total, activeTabId, name} = this.state
    const filteredMenuCardList = total.filter(
      eachCategory => eachCategory.menuCategoryId === activeTabId,
    )

    console.log(filteredMenuCardList)
    const [{categoryDishes}] = filteredMenuCardList
    console.log(categoryDishes)

    return (
      <>
        <Header name={name} />
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
          {categoryDishes.map(eachDish => (
            <Dish dishData={eachDish} key={eachDish.dishId} />
          ))}
        </ul>
      </>
    )
  }

  renderRestaurentView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderRestaurentView()}</>
  }
}

export default Home
