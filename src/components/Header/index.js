import {BsCart3} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const {cartItems} = props

  return (
    <nav className='header-bg-container'>
      <h1>UNI Resto Cafe</h1>
      <p>My Orders {cartItems.length}</p>
    </nav>
  )
}

export default Header
