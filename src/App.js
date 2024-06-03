import {Component} from 'react'
import Home from './components/Home'

import './App.css'

// write your code here

const App = () => (
  <>
    <Home />
  </>
)

/* <div className="app-bg-container">
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

export default App
