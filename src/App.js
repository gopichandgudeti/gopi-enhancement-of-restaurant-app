import {Component} from 'react'
import Header from './components/Header'
import Home from './components/Home'

import './App.css'

// write your code here

const menu = [
  {menuCategory: 'Salads and Soup', menuCategoryId: '11'},
  {menuCategory: 'From The Barnyard', menuCategoryId: '12'},
  {menuCategory: 'From the Hen House', menuCategoryId: '13'},
  {menuCategory: 'Fresh From The Sea', menuCategoryId: '14'},
  {menuCategory: 'Biryani', menuCategoryId: '15'},
  {menuCategory: 'Fast Food', menuCategoryId: '17'},
]

class App extends Component {
  state = {
    cartCount: 0,
    activeTabId: '11',
  }

  render() {
    const {cartCount, activeTabId} = this.state

    return (
      /*<div className="app-bg-container">
        <nav className="nav-container">
          <h1 className="cafe-name">UNI Resto Cafe</h1>
          <div>
            <p>Cart</p>
            <div className="cart-count-container">{cartCount}</div>
          </div>
        </nav>
        <ul className="tabs-container">
          {menu.map(eachItem => (
            <Menubar
              menuData={eachItem}
              key={eachItem.menuCategoryId}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
      </div> */
      <>
        <Header />
        <Home />
      </>
    )
  }
}

export default App
