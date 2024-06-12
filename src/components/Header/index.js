import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoCartOutline} from 'react-icons/io5'

import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const {cartList} = useContext(CartContext)
  const {name} = props

  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartIcon = () => (
    <div className="cart-icon-link">
      <Link to="/Cart" className="cart-icon">
        <button type="button">
          <IoCartOutline size="30" color="3616e7c" aia-label="cart-icon" />
        </button>
      </Link>
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="cart-count">{cartList.length}</p>
      </div>
    </div>
  )

  return (
    <nav className="header-bg-container">
      <Link to="/">
        <h1>{name}</h1>
      </Link>
      <div className="buttons-icon-container">
        <p className="my-orders-text">My Orders </p>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onClickLogout}
        >
          Logout
        </button>
        {renderCartIcon()}
      </div>
    </nav>
  )
}

export default withRouter(Header)
