import {Link, withRouter} from 'react-router-dom'
import {IoCartOutline} from 'react-icons/io5'

import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const {name} = props

        return (
          <nav className="header-bg-container">
            <Link to="/">
              <h1>{name}</h1>
            </Link>
            <div className="buttons-icon-container">
              <Link to="/Cart" className="my-orders-text">
                <p>My Orders </p>
              </Link>
              <Link to="/Cart" className="cart-icon">
                <button type="button">
                  <IoCartOutline size="30" color="3616e7c" aia-label="cart" />
                </button>
                <p>{cartList.length}</p>
              </Link>
              
              <button type="button" onClick={onClickLogout}>
                Logout
              </button>
            </div>
          </nav>
        )
      }}
    </CartContext.Consumer>
  )
}

export default withRouter(Header)
