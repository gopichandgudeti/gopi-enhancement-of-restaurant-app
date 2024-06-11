import {Link, withRouter} from 'react-router-dom'
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
            <div>
              <Link to="/Cart">
                <p>My Orders {cartList.length}</p>
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
