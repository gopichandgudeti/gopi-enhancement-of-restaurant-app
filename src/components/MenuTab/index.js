import './index.css'

const MenuTab = props => {
  const {menuData, isActive, onChangeTab} = props
  const {
    menuCategory,
    menuCategoryId,
    menuCategoryImage,
    nexturl,
    categoryDishes,
  } = menuData

  const onClickTabItem = () => {
    onChangeTab(menuCategoryId)
  }

  const activeButton = isActive ? 'active-btn' : ''

  return (
    <li className="list-item" key={menuCategoryId} onClick={onClickTabItem}>
      <button type="button" className={`tab-btn ${activeButton}`}>
        {menuCategory}
      </button>
    </li>
  )
}

export default MenuTab
